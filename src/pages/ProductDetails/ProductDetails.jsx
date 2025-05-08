import React from 'react'
import './ProductDetails.scss'
import { Col, Image, Input, InputNumber, Row } from 'antd'
import NavigateLine from '@/pages/Home/components/NavigateLine/NavigateLine'
import Button from '@/components/common/Button/Button'
export default function ProductDetails() {
  return (
    <div>
      <NavigateLine/>
      <Row className=' product-details-block'>
        <Col xl={15} lg={12} md={12} sm={24} xs={24} >
          <img className='product-image' src="https://product.hstatic.net/200000506575/product/cv18-nhat_3e93bfd805cc42c082e65a33726250a6_1024x1024.jpg" alt="" />
        </Col>
        <Col xl={9} lg={12} md={12} sm={24} xs={24}>
          <h1>RƯỢU CHIVAS 18 NĂM MIZUNARA HỘP QUÀ TẾT 2025</h1>
          <p>SKU:RCV18M </p>
          <br />
          <h2>2,700,000₫</h2>
          <br />
          <div className='product-quantity'>
            <label >Số lượng</label>
            <InputNumber min={1} max={10} defaultValue={1} onChange={() => {}} changeOnWheel />
          </div>
          <p className='note'> Ghi chú</p>
          <Input placeholder="Thêm ghi chú" />
          <Button
            width={370}
            height={50}
            content={'Mua ngay'}
            buttonType={'primary'}
          />
          <h2>Chi tiết sản phẩm </h2>
          <h1>Thông tin sản phẩm</h1>
          <p>- Xuất xứ: Scotland</p>
          <p>- Thương hiệu: Chivas</p>
          <p>- Tuổi rượu: 15 năm</p>
          <p>- Giống Nho: Blended Scotch Whisky</p>
          <p>- Nồng Độ: 40%</p>
          <p>- Dung Tích: 700ml</p>

        </Col>
      </Row>
    </div>
  )
}
