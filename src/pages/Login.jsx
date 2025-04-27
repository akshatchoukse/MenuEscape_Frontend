import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [tableNo, setTableNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number || !tableNo) {
      setError('Please fill out all fields.');
      return;
    }

    if (!/^\d{10}$/.test(number)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!/^\d+$/.test(tableNo)) {
      setError('Table number must be a valid number.');
      return;
    }

    setError('');
    axios
      .post('http://localhost:5000/api/user', {
        name,
        number,
        tableNo,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('name', name);
        localStorage.setItem('tableNo', tableNo);
        localStorage.setItem('number', number);
        navigate('/menu');
      })
      .catch((err) => {
        console.error('Login failed:', err);
        setError('Login failed. Please try again.');
      });
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-gray-100">
      <Header />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="table" className="block text-gray-700 font-medium mb-2">
              Table Number
            </label>
            <input
              type="text"
              id="table"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your table number"
              value={tableNo}
              onChange={(e) => setTableNo(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[#211b16] text-white font-semibold rounded-lg hover:text-[#211b16] hover:bg-[#C4A484] transition duration-300"
          >
            Login
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
