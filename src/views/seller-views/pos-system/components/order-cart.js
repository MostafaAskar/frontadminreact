import React, { useState } from 'react';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Space,
  Spin,
} from 'antd';
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  clearCart,
  removeFromCart,
  reduceCart,
  setCartShops,
  clearCartShops,
  setCartTotal,
  addCoupon,
  verifyCoupon,
  removeBag,
  setCartOrder,
  setLoadingCoupon,
  clearData,
} from 'redux/slices/cart';
import getImage from 'helpers/getImage';
import useDidUpdate from 'helpers/useDidUpdate';
import orderService from 'services/seller/order';
import invokableService from 'services/rest/invokable';
import { useTranslation } from 'react-i18next';
import numberToPrice from 'helpers/numberToPrice';
import { getCartData, getCartItems } from 'redux/selectors/cartSelector';
import PreviewInfo from './preview-info';
import { toast } from 'react-toastify';
import { fetchSellerProducts } from 'redux/slices/product';
import moment from 'moment';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import RiveResult from 'components/rive-result';

export default function OrderCart() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cartItems, cartShops, currentBag, total, coupons, currency } =
    useSelector((state) => state.cart, shallowEqual);
  const { myShop } = useSelector((state) => state.myShop, shallowEqual);
  const filteredCartItems = useSelector((state) => getCartItems(state.cart));
  const data = useSelector((state) => getCartData(state.cart), shallowEqual);

  console.log('data', data);

  const [loading, setLoading] = useState(false);
  const [showInvoice, setShowInvoice] = useState(null);
  const [couponSuccessful, setCouponSuccessful] = useState(false);
  const [form] = Form.useForm();
  const { myShop: shop } = useSelector((state) => state.myShop, shallowEqual);
  const locat = useLocation();
  const delivery_type = locat?.state?.delivery_type;

  const deleteCard = (e) => dispatch(removeFromCart(e));
  const clearAll = () => {
    dispatch(clearCart());
    dispatch(clearData());
    if (currentBag !== 0) {
      dispatch(removeBag(currentBag));
    }
  };

  const increment = (item) => {
    if (item.quantity === item?.stock?.quantity) {
      return;
    }
    if (item.quantity === item.max_qty) {
      return;
    }
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const decrement = (item) => {
    if (item.quantity === 1) {
      return;
    }
    if (item.quantity <= item.min_qty) {
      return;
    }
    dispatch(reduceCart({ ...item, quantity: 1 }));
  };

  function formatProducts(list) {
    const products = list.map((item) => ({
      quantity: item.quantity,
      stock_id: item.stockID ? item.stockID?.id : item.stock?.id,
    }));

    const verifiedCoupons = {};

    coupons
      ?.filter((coupon) => coupon?.verified)
      ?.forEach(
        (coupon) => (verifiedCoupons[`${coupon?.shop_id}`] = coupon?.name),
      );

    const result = {
      products,
      currency_id: currency?.id,
      coupon: verifiedCoupons,
      shop_id: shop.id,
      delivery_type: data?.deliveries?.value,
      delivery_point_id:
        data?.delivery_type === 'point'
          ? data?.delivery_point?.value
          : undefined,
      delivery_price_id:
        data?.delivery_type === 'delivery'
          ? data?.delivery_price_id
          : undefined,
    };
    return QueryString.stringify(result, { addQueryPrefix: true });
  }

  useDidUpdate(() => {
    dispatch(
      fetchSellerProducts({
        perPage: 12,
        currency_id: currency?.id,
        status: 'published',
        active: 1,
      }),
    );
    if (filteredCartItems.length) {
      productCalculate();
    }
  }, [currency]);

  useDidUpdate(() => {
    if (filteredCartItems.length) {
      productCalculate();
    } else {
      dispatch(clearCartShops());
    }
  }, [
    cartItems,
    currentBag,
    data?.delivery_price_id,
    currency,
    data?.coupon,
    couponSuccessful,
  ]);

  function productCalculate() {
    const products = formatProducts(filteredCartItems);

    setLoading(true);
    orderService
      .calculate(products)
      .then(({ data }) => {
        const items = data?.shops
          ?.flatMap((shop) => shop.stocks)
          ?.map((item) => ({
            ...filteredCartItems.find((el) => el.id === item.id),
            ...item,
            ...item.stock.countable,
            stock: item.stock.stock_extras,
            stocks: item.stock.stock_extras,
            stockID: item.stock,
          }));
        dispatch(setCartShops(items));
        const orderData = {
          product_total: data?.price,
          tax: data?.total_tax,
          shop_tax: data?.total_shop_tax,
          order_total: data?.total_price,
          delivery_fee: data?.delivery_fee?.reduce(
            (total, item) => (total += item?.price ?? 0),
            0,
          ),
          service_fee: data?.service_fee,
          coupon:
            data?.coupon?.reduce((total, item) => (total += item?.price), 0) ??
            0,
          discount: data?.total_discount,
        };
        dispatch(setCartTotal(orderData));
      })
      .finally(() => setLoading(false));
  }

  const handleCloseInvoice = () => {
    setShowInvoice(null);
    clearAll();
    toast.success(t('successfully.closed'));
  };

  function handleCheckCoupon(shopId) {
    const coupon = coupons?.find((coupon) => coupon.shop_id === shopId);
    if (!coupon || !coupon?.name?.trim()) {
      return;
    }

    const body = {
      coupon: coupon?.name,
      shop_id: coupon?.shop_id,
      user_id: data?.user?.value,
    };

    dispatch(setLoadingCoupon({ shop_id: shopId, loading: true }));
    invokableService
      .checkCoupon(body)
      .then(({ data }) => {
        dispatch(verifyCoupon({ shop_id: data?.shop_id, price: data?.price }));
        setCouponSuccessful(!couponSuccessful);
      })
      .catch((error) => console.log('error of coupon => ', error))
      .finally(() =>
        dispatch(setLoadingCoupon({ shop_id: shopId, loading: false })),
      );
  }

  const handleClick = () => {
    if (!currency && !delivery_type) {
      toast.warning(t('please.select.currency'));
      return;
    }
    if (!data.address && data?.delivery_type === 'delivery') {
      toast.warning(t('please.select.address'));
      return;
    }
    if (!data.deliveryAddress.city_id && data?.delivery_type === 'delivery') {
      toast.warning(t('delivery.address.is.invalid'));
      return;
    }
    // if (!data.street_house_number && data?.delivery_type === 'delivery') {
    //   toast.warning(t('please.enter.house.number'));
    //   return;
    // }
    // if (!data.zip_code && data?.delivery_type === 'delivery') {
    //   toast.warning(t('please.enter.zipcode'));
    //   return;
    // }
    if (!data.delivery_point && data?.delivery_type === 'point') {
      toast.warning(t('please.select.delivery.point'));
      return;
    }
    if (!data.delivery_time && !delivery_type) {
      toast.warning(t('shop.closed'));
      return;
    }
    if (!data.delivery_date && !delivery_type) {
      toast.warning(t('please.select.deliveryDate'));
      return;
    }

    setLoading(true);

    const verifiedCoupons = coupons?.filter((coupon) => coupon?.verified);
    const resultCoupons = verifiedCoupons.reduce((acc, coupon) => {
      acc[`${coupon.shop_id}`] = coupon.name;
      return acc;
    }, {});

    const products = cartShops?.map((cart) => ({
      stock_id: cart.stockID.id,
      quantity: cart.quantity,
      bonus: cart.bonus,
    }));

    const defaultBody = {
      user_id: data.user?.value,
      currency_id: currency?.id,
      rate: currency.rate,
      payment_id: data.paymentType?.value,
      delivery_point_id:
        data?.delivery_type === 'point'
          ? data?.delivery_point?.value
          : undefined,
      delivery_date: `${data.delivery_date} ${moment(
        data.delivery_time,
        'HH:mm',
      ).format('HH:mm')}`,
      delivery_type: data.deliveries?.value,
      coupon: resultCoupons,
      data: [
        {
          shop_id: shop?.id,
          products,
        },
      ],
      tax: total.order_tax,
      delivery_price_id:
        data?.delivery_type === 'delivery'
          ? data?.delivery_price_id
          : undefined,
      address:
        data?.delivery_type === 'delivery' ? data?.deliveryAddress : undefined,
      location:
        data?.delivery_type === 'delivery'
          ? {
              latitude: data?.deliveryAddress?.location?.latitude,
              longitude: data?.deliveryAddress?.location?.longitude,
            }
          : undefined,

      products: products,
      phone: data?.phone?.toString(),
    };

    const dineInBody = {
      currency_id: currency?.id,
      delivery_type: delivery_type,
      payment_type: data.paymentType?.label,
      products: products,
      shop_id: shop.id,
      coupon: resultCoupons,
    };

    const body = delivery_type ? dineInBody : defaultBody;

    orderService
      .create(body)
      .then((response) => {
        batch(() => {
          dispatch(setCartOrder(response?.data));
          dispatch(clearCart());
        });
        setShowInvoice(true);
        form.resetFields();
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const coupon = coupons?.find((coupon) => coupon?.shop_id === myShop?.id);

  return (
    <Card>
      {loading && (
        <div className='loader'>
          <Spin />
        </div>
      )}
      <div className='card-save'>
        {cartShops.map((item) => (
          <div>
            {item.bonus !== true ? (
              <div className='custom-cart-container' key={item.id}>
                <Row className='product-row'>
                  <Image
                    width={70}
                    height='auto'
                    src={getImage(item.img)}
                    preview
                    placeholder
                    className='rounded'
                  />
                  <Col span={18} className='product-col'>
                    <div>
                      <span className='product-name'>
                        {item?.translation?.title}
                      </span>
                      <br />
                      <Space wrap className='mt-2'>
                        {item?.stock?.map((el, idj) => {
                          if (el?.group?.type === 'color') {
                            return (
                              <Space>
                                {t('color')}:
                                <div
                                  className='extras-color'
                                  style={{
                                    backgroundColor: el?.value?.value,
                                  }}
                                ></div>
                              </Space>
                            );
                          }
                          return (
                            <Space>
                              <span>{el?.group?.translation?.title}:</span>
                              <span
                                key={idj + '-' + el.value?.value}
                                className='extras-text rounded pr-2 pl-2'
                              >
                                {el.value?.value}
                              </span>
                            </Space>
                          );
                        })}
                      </Space>
                      <br />
                      <Space wrap className='mt-2'>
                        {item.addons?.map((addon) => {
                          return (
                            <span className='extras-text rounded pr-2 pl-2'>
                              {addon?.countable?.translation?.title} x{' '}
                              {addon.quantity}
                            </span>
                          );
                        })}
                      </Space>
                      <div className='product-counter'>
                        <span>
                          {numberToPrice(
                            item?.total_price || item?.price,
                            currency?.symbol,
                          )}
                        </span>

                        <div className='count'>
                          <Button
                            className='button-counter'
                            shape='circle'
                            icon={<MinusOutlined size={14} />}
                            onClick={() => decrement(item)}
                          />
                          <span>
                            {item?.quantity *
                              (item?.stock?.product?.interval || 1)}
                            {item?.stock?.product?.unit?.translation?.title}
                          </span>
                          <Button
                            className='button-counter'
                            shape='circle'
                            icon={<PlusOutlined size={14} />}
                            onClick={() => increment(item)}
                          />
                          <Button
                            className='button-counter'
                            shape='circle'
                            onClick={() => deleteCard(item)}
                            icon={<DeleteOutlined size={14} />}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ) : (
              <>
                <h4 className='mt-2'>{t('bonus.product')}</h4>
                <div className='custom-cart-container' key={item.id}>
                  <Row className='product-row'>
                    <Image
                      width={70}
                      height='auto'
                      src={getImage(item.img)}
                      preview
                      placeholder
                      className='rounded'
                    />
                    <Col span={18} className='product-col'>
                      <div>
                        <span className='product-name'>
                          {item?.translation?.title}
                        </span>
                        <br />
                        <Space wrap className='mt-2'>
                          {item?.stock?.map((el) => {
                            if (el?.group?.type === 'color') {
                              return (
                                <Space>
                                  {t('color')}:
                                  <div
                                    className='extras-color'
                                    style={{
                                      backgroundColor: el?.value?.value,
                                    }}
                                  ></div>
                                </Space>
                              );
                            }
                            return (
                              <Space>
                                <span>{el?.group?.translation?.title}:</span>
                                <span
                                  key={el.value?.value}
                                  className='extras-text rounded pr-2 pl-2'
                                >
                                  {el.value?.value}
                                </span>
                              </Space>
                            );
                          })}
                        </Space>
                        <br />
                        <Space wrap className='mt-2'>
                          {item.addons?.map((addon) => {
                            return (
                              <span className='extras-text rounded pr-2 pl-2'>
                                {addon?.countable?.translation?.title} x{' '}
                                {addon.quantity}
                              </span>
                            );
                          })}
                        </Space>
                        <div className='product-counter'>
                          <span>
                            {numberToPrice(
                              item?.total_price || item?.price,
                              currency?.symbol,
                            )}
                          </span>

                          <div className='count'>
                            <Button
                              className='button-counter'
                              shape='circle'
                              icon={<MinusOutlined size={14} />}
                              onClick={() => decrement(item)}
                              disabled
                            />
                            <span>
                              {item?.quantity *
                                (item?.stock?.product?.interval || 1)}
                              {item?.stock?.product?.unit?.translation?.title}
                            </span>
                            <Button
                              className='button-counter'
                              shape='circle'
                              icon={<PlusOutlined size={14} />}
                              onClick={() => increment(item)}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            )}
          </div>
        ))}
        {cartShops.length ? (
          <div
            style={{ display: 'flex', columnGap: '20px', marginTop: '20px' }}
          >
            <Input
              className={'w-100'}
              placeholder={t('enter.coupon')}
              onChange={(e) =>
                dispatch(
                  addCoupon({
                    name: e.target.value,
                    shop_id: myShop?.id,
                  }),
                )
              }
            />
            <Button
              onClick={() => handleCheckCoupon(myShop?.id)}
              disabled={coupon?.loading}
              loading={coupon?.loading}
            >
              {t('check')}
            </Button>
          </div>
        ) : (
          <div>
            <RiveResult id='nosell' />
            <p style={{ textAlign: 'center' }}>{t('empty.cart')}</p>
          </div>
        )}

        {!cartShops?.length && <Divider />}

        <Row className='all-price-row'>
          <Col span={24} className='col'>
            <div className='all-price-container'>
              <span>{t('products')}</span>
              <span>
                {numberToPrice(total.product_total, currency?.symbol)}
              </span>
            </div>
            <div className='all-price-container'>
              <span>{t('delivery.fee')}</span>
              <span>{numberToPrice(total.delivery_fee, currency?.symbol)}</span>
            </div>
            <div className='all-price-container'>
              <span>{t('service.fee')}</span>
              <span>{numberToPrice(total.service_fee, currency?.symbol)}</span>
            </div>
            <div className='all-price-container'>
              <span>{t('tax')}</span>
              <span>{numberToPrice(total.tax, currency?.symbol)}</span>
            </div>
            <div className='all-price-container'>
              <span>{t('discount')}</span>
              <span>- {numberToPrice(total.discount, currency?.symbol)}</span>
            </div>
            <div className='all-price-container'>
              <span>{t('coupon')}</span>
              <span>- {numberToPrice(total.coupon, currency?.symbol)}</span>
            </div>
          </Col>
        </Row>

        <Row className='submit-row'>
          <Col span={14} className='col'>
            <span>{t('total.amount')}</span>
            <span>{numberToPrice(total.order_total, currency?.symbol)}</span>
          </Col>
          <Col className='col2'>
            <Button
              type='primary'
              onClick={() => handleClick()}
              disabled={!cartShops.length}
            >
              {t('place.order')}
            </Button>
          </Col>
        </Row>
      </div>
      {showInvoice ? <PreviewInfo handleClose={handleCloseInvoice} /> : ''}
    </Card>
  );
}
