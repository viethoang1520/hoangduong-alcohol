import React from 'react'
import './ProductDetails.scss'
import { Col, Image, Input, InputNumber, Row } from 'antd'
import NavigateLine from '@/pages/Home/components/NavigateLine/NavigateLine'
import Button from '@/components/common/Button/Button'
export default function ProductDetails() {
  return (
    <div className='container'>
      <NavigateLine/>
      <Row gutter={32} className='product-details-block'>
        <Col xl={15} lg={12} md={12} sm={24} xs={24} >
          <img className='product-image' src="https://product.hstatic.net/200000506575/product/cv18-nhat_3e93bfd805cc42c082e65a33726250a6_1024x1024.jpg" alt="" />
        </Col>
        <Col className='product-detail-wrapper' xl={9} lg={12} md={12} sm={24} xs={24}>
          <h1 className='product-detail-name'>RƯỢU CHIVAS 18 NĂM MIZUNARA HỘP QUÀ TẾT 2025</h1>
          <p className='product-detail-identifier'>SKU:RCV18M </p>
          <div className="price-line"></div>
          <h2 className='product-detail-price'>2,700,000₫</h2>
          <div className="price-line"></div>
          <div className='product-quantity'>
            <label className='product-detail-info-label'>Số lượng: </label>
            <InputNumber min={1} max={10} defaultValue={1} onChange={() => {}} changeOnWheel />
          </div>
          <p className='note product-detail-info-label'> Ghi chú</p>
          <Input placeholder="Thêm ghi chú" />
          <Button
            width={370}
            height={50}
            content={'Mua ngay'}
            buttonType={'primary'}
          />
          <h2 className='product-detail-label'>Chi tiết sản phẩm </h2>
          <h1 className='product-detail-info-label'>Thông tin sản phẩm</h1>
          <p className='product-detail-info-label'>- Xuất xứ: </p>
          <p className='product-detail-info-label'>- Thương hiệu: </p>
          <p className='product-detail-info-label'>- Tuổi rượu: </p>
          <p className='product-detail-info-label'>- Giống Nho: </p>
          <p className='product-detail-info-label'>- Nồng Độ: </p>
          <p className='product-detail-info-label'>- Dung Tích: </p>

        </Col>
      </Row>
    </div>
  )
}
