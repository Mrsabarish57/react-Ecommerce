import React from "react";
import Navbar from "../Component/Navbar";
import Viewcart from "../Component/Viewcart";
import Footer from "../Component/Footer";

const Viewcarts = () => {
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
        <Viewcart />

        <button style={{position:"fixed",bottom:'100px',left:"300px"}}>Check out</button>
      </div>
      <Footer />
    </div>
  );
};

export default Viewcarts;
