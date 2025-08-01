import React from 'react'
import Navbar from '../Component/Navbar'
import Settingdashboard from '../Component/Settingdashboard'
import Footer from '../Component/Footer'
import AdminDashboard from './AdminDashboard'

const Setting = () => {
  return (
    <div>
        <Navbar/>
        <Settingdashboard/>
        <AdminDashboard/>
        <Footer/>
    </div>
  )
}

export default Setting