import React, { useEffect, useState } from 'react'
import AlcoholCarousel from '@/pages/Home/components/AlcoholCarousel/AlcoholCarousel'
import AlcoholList from '@/pages/Home/components/AlcoholList/AlcoholList'
import NavigateLine from '@/pages/Home/components/NavigateLine/NavigateLine'
import './Home.scss'
import { getAllWines } from '../../apis/wine'
import { useWineStore } from '../../store/wineStore'

export default function Home() {
  const { wineList, setWineList } = useWineStore()
  const fetchWineList = async () => {
    try {
      const res = await getAllWines()
      setWineList(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchWineList()
  }, [])
  return (
    <div>
      <NavigateLine />
      <AlcoholCarousel />
      <AlcoholList />
    </div>
  )
}
