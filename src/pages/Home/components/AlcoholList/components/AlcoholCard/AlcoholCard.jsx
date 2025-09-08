import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios'
import './AlcoholCard.scss';
export default function AlcoholCard({ wine }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const handleAddToCart = async () => {
      const res = await axios.post('http://localhost:3000/cart/add', {
        productID: 1,
        quantity: 1
      }, {
        withCredentials: true
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Link to={`/wine/${wine.id}`}>
      <Card
        className='wine-card'
        hoverable
        size='small'
        style={{
          width: 260,
          height: 540,
        }}
        cover={<img className='wine-image' alt="example" src={wine.image} />}
      >
        <p className="wine-name">{wine.name}</p>
        <p className="wine-rating">{wine.rating} 5 đánh giá </p>
        <p className="wine-price">${wine.price}</p>
        <p className='wine-content'>CÒN HÀNG</p>
        <p className='wine-content'>GIAO HÀNG SIÊU TỐC 30 PHÚT</p>
        <div className="buy-block"> 
          <button onClick={handleAddToCart} className="buy-button">
            <Icon className='buy-icon' icon="streamline:shopping-basket-1" />
            <p className='buy-content'>MUA NGAY</p>
          </button>
          <div className="love-block" onClick={() => setIsHeartClicked(!isHeartClicked)}>
            {isHeartClicked ? <Icon className='love-icon-filled' icon="mdi:heart" /> : <Icon className='love-icon' icon="mdi-light:heart" />}
          </div>
        </div>
      </Card>
    </Link>
  )
}
