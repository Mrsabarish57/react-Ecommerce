import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add logic here to send data to a server
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div style={{display: 'flex',alignItems:'center',justifyContent:'center',height:'500px'  }}>
      <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        style={textareaStyle}
      />
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
    </div>
  );
};

// Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: 'auto',
};

const inputStyle = {
  padding: '10px',
  margin: '5px 0',
  fontSize: '16px',
};

const textareaStyle = {
  padding: '10px',
  margin: '5px 0',
  fontSize: '16px',
  minHeight: '100px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius:'20px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default ContactForm;