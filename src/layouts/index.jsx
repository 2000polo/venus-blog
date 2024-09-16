import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import CategoryMenu from '../components/CategoryMenu'
import Footer from '../components/Footer'

const UserLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default UserLayout