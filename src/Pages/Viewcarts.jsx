import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Viewcart from "../Component/Viewcart";
import Footer from "../Component/Footer";
import Tickanimation from '../Component/Tickanimation'
import '../style.css'
import Checkoutform from "../Component/Checkoutform";

const Viewcarts = () => {

  const[toggle,setToggle]=useState(false)

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "#007bff4f",
          padding: "2px",
          textAlign: "center",
        }}
      >
        <h1>My cart</h1>
      </div>
      <div
        style={{
          margin: "20px",
          border: "1px solid black",
          marginBottom: "60px",
          width: "700px",
          height: "400px",
          overflow:'scroll'
        }}
      >
        {toggle ? <Checkoutform/>:<Viewcart/> }

        

        {!toggle && <button style={{position:"fixed",bottom:'100px',left:"300px"}} className="place-button" onClick={()=>setToggle((cur)=>!cur)}>Check out</button>}
      </div>
      <Footer />
    </div>
  );
};

export default Viewcarts;
