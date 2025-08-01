import React, { useContext } from "react";
import { myContext } from "../App";

const cardContainerStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "10px",
};

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "150px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const imageStyle = {
  width: "100px",
  borderRadius: "6px",
};


const Viewcart = () => {
  const cartval = useContext(myContext);

  return (
    <div  style={cardContainerStyle}>
      {cartval.addcart.map((cur) => {
        return (
          <div style={cardStyle}>
            <img src={cur.image} alt={cur.image} style={imageStyle} />
            <h3>{cur.title}</h3>
            <h5>{cur.price}</h5>
            <h5>{cur.category}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Viewcart;
