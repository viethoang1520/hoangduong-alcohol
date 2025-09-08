import React, { useEffect, useState } from 'react';
import './ProductDetails.scss';
import { Col, Image, Input, InputNumber, Row } from 'antd';
import NavigateLine from '@/pages/Home/components/NavigateLine/NavigateLine';
import Button from '@/components/common/Button/Button';
import { useParams, useLocation } from 'react-router-dom';
import { getWineById } from '../../apis/wine';

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [wine, setWine] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWine = async () => {
    try {
      setLoading(true);
      const res = await getWineById(id);
      setWine(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWine();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  if (loading) {
    return (
      <div className="container">
        <NavigateLine />
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <NavigateLine />
      <div className="container">

        <Row gutter={32} className="product-details-block">
          <Col xl={15} lg={12} md={12} sm={24} xs={24}>
            <img className="product-image" src={wine?.image} alt="" />
          </Col>
          <Col className="product-detail-wrapper" xl={9} lg={12} md={12} sm={24} xs={24}>
            <h1 className="product-detail-name">{wine?.name}</h1>
            <p className="product-detail-identifier">SKU:RCV18M </p>
            <div className="price-line"></div>
            <h2 className="product-detail-price">{(wine?.price * 26000).toLocaleString()}₫</h2>
            <div className="price-line"></div>
            <div className="product-quantity">
              <label className="product-detail-info-label">Số lượng: </label>
              <InputNumber min={1} max={10} defaultValue={1} onChange={() => { }} changeOnWheel />
            </div>
            <p className="note product-detail-info-label"> Ghi chú</p>
            <Input placeholder="Thêm ghi chú" />
            <Button
              width={370}
              height={50}
              content={'Mua ngay'}
              buttonType={'primary'}
            />
            <h2 className="product-detail-label">Chi tiết sản phẩm </h2>
            <h1 className="product-detail-info-label">Thông tin sản phẩm</h1>
            <p className="product-detail-info-label">- Xuất xứ: </p>
            <p className="product-detail-info-label">- Thương hiệu: {wine?.brand}</p>
            <p className="product-detail-info-label">- Tuổi rượu: {wine?.vintage}</p>
            <p className="product-detail-info-label">- Nồng Độ: {wine?.alcoholContent}</p>
            <p className="product-detail-info-label">- Dung Tích: {wine?.volume}ml </p>
            <p className="product-detail-info-label">- Sẵn kho: {wine?.stockQuantity} chai </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}