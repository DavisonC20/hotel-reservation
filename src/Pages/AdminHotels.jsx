import React from 'react'
import BarTitles from '../Components/BarTitles/BarTitles'
import HeaderAdmin from '../Components/Header/HeaderAdmin'
import { Outlet } from 'react-router-dom'

function AdminHotels() {
  return (
    <>
    <HeaderAdmin/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default AdminHotels