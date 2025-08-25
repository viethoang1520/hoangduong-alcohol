import React from 'react'
import Banner from '../../common/Banner/Banner'
import Header from '../../common/Header/Header'

function LoginLayout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Header />

      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default LoginLayout