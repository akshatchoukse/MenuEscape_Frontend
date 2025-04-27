import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="relative z-20 flex flex-col justify-between h-full">
        <Header/>

        <div className="flex flex-1 flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to <span className="text-[#FFD700]">Hotel Saffron</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl drop-shadow-md">
            Discover flavors that satisfy your soul. Dine in, or order your favorites now.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-2xl text-lg hover:bg-white hover:text-[#211b16] transition-all duration-300 shadow-lg"
          >
            Make Order
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
