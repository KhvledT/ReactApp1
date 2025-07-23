import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'


export default function Layout() {

  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}
