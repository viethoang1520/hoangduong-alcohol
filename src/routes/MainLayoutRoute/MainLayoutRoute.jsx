import React from 'react'
import { Outlet } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout/MainLayout";

export default function MainLayoutRoute() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
