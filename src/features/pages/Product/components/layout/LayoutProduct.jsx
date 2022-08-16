import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../../../components/Header'

const LayoutProduct = () => {
  return (
    <>
    <Header />
    Layout
    <Outlet />
    </>
  )
}

export default LayoutProduct
