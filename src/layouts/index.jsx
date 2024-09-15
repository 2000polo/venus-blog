import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import CategoryMenu from '../components/CategoryMenu'

const UserLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default UserLayout