import React from 'react'
import AlcoholCarousel from '@/pages/Home/components/AlcoholCarousel/AlcoholCarousel'
import AlcoholList from '@/pages/Home/components/AlcoholList/AlcoholList'
import NavigateLine from '@/pages/Home/components/NavigateLine/NavigateLine'
import './Home.scss'

export default function Home() {
  return (
    <div>
      <NavigateLine/>
      <AlcoholCarousel />
      <AlcoholList />
    </div>
  )
}
