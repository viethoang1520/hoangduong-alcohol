import Banner from '@/components/common/Banner/Banner'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer' 
import React from 'react'

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}