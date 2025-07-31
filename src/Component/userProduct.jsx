import React, { useEffect, useState } from "react";

const userProduct = () => {

  const[products,setProducts]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
  },[])
  
  const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "200px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "6px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
   <div style={cardContainerStyle}>
    {
      products.map((cur)=>{
        return(
          <div style={cardStyle}>
            <img src={cur.image} alt={cur.image} style={imageStyle}/>
            <h3>{cur.title}</h3>
            <h5>{cur.price}</h5>
            <h5>{cur.category}</h5>
            <button style={buttonStyle}>Add to cart</button>
          </div>
        )
      })
    }
   </div>
  );
};

export default userProduct;
