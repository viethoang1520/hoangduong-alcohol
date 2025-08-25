import React from 'react'
import LoginLayout from '../../components/layout/LoginLayout/LoginLayout'
import { Outlet } from 'react-router-dom'

function LoginLayoutRoute() {
  return (
    <LoginLayout>
      <Outlet/>
    </LoginLayout>
  )
}

export default LoginLayoutRoute