import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchBar from './searchBar'
import { FaOpencart } from "react-icons/fa6";
import Userproduct from './userProduct'
import { BsCart3 } from "react-icons/bs";


const Dashboard = () => {

 

  return (
    <div>
      {/* nav-container */}
      <div>
        <Navbar/>
      </div>
      <div>
        {/* search-container */}
        <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around',alignItems:'center',backgroundColor:'#007bff4f'}}>
          <div >
            <SearchBar/>
          </div>
          <div style={{backgroundColor:'#007bffff',padding:'5px',borderRadius:'5px'}}>
             <FaOpencart/>
          </div>
        </div>
        {/* main content */}
        <div>
           <Userproduct/>
        </div>

      </div>
      {/* footer container */}
      <div >
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard