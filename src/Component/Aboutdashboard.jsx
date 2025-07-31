import React from 'react'

const Aboutdashboard = () => {
  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      <h1
        style={{
          fontSize: '36px',
          color: '#333',
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        About Us
      </h1>

      <p
        style={{
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.6',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Welcome to <strong>YourShopName</strong>, your one-stop online shop for
        high-quality products at unbeatable prices. We are dedicated to bringing
        you the best in fashion, electronics, home goods, and more, all with fast
        shipping and great customer service.
      </p>

      <p
        style={{
          fontSize: '18px',
          color: '#555',
          lineHeight: '1.6',
          fontFamily: 'Arial, sans-serif',
          marginTop: '20px',
        }}
      >
        Our mission is simple: To provide our customers with an enjoyable and
        seamless shopping experience. We work hard to ensure that every order is
        handled with care and that you find exactly what you're looking for.
      </p>

      <div
        style={{
          marginTop: '40px',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'inline-block',
        }}
      >
        <a
          href="/contact"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Aboutdashboard