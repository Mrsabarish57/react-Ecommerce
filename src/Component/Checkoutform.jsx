import React, { useContext, useRef, useState } from "react";
import { myContext } from "../App";
import Tickanimation from "./Tickanimation"

const Checkoutform = () => {
  const checkval = useContext(myContext);

  const cnameRef = useRef();
  const cmobileRef = useRef();
  const cmailRef = useRef();
  const caddreRef = useRef();

  const[toggle,setToggle]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    checkval.setCheckdet((c) => [
      ...c,
      {
        cname: cnameRef.current.value,
        cmobile: cmobileRef.current.value,
        cmail: cmailRef.current.value,
        caddre: caddreRef.current.value,
      },
    ]);

    // Optionally clear inputs
    cnameRef.current.value = "";
    cmobileRef.current.value = "";
    cmailRef.current.value = "";
    caddreRef.current.value = "";

    setToggle(!toggle)
  };

  const containerStyle = {
    maxWidth: "300px",
    margin: "20px auto",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
    color: "#333",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    toggle ? <Tickanimation/> : <div style={containerStyle}>
      
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input type="text" ref={cnameRef} style={inputStyle} required />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Mobile</label>
          <input type="text" ref={cmobileRef} style={inputStyle} required />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Email</label>
          <input type="email" ref={cmailRef} style={inputStyle} required />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Address</label>
          <input type="text" ref={caddreRef} style={inputStyle} required />
        </div>

        <button type="submit" style={buttonStyle}>Buy now</button>
      </form>
    </div>
  );
};

export default Checkoutform;
