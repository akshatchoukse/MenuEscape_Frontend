import axios from 'axios';
import React, { useState } from 'react';


const LoginForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setError('Please fill out both fields.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setError('');
    // Proceed with login (e.g., API call)
    console.log('Login successful', { name, phone });
  };

  return (<div></div>
  );
};

export default LoginForm;
