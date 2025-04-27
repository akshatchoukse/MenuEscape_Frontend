import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function AbtHotel() {
  let navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9e6] to-[#fff1cc] flex flex-col">
      <Header />

      <div className="flex flex-1 items-center justify-center px-6">
        <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-[#e5e5e5] p-8 rounded-3xl max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-[#211b16] mb-6">Welcome to Saffron Dine</h2>
          <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
            Indulge in an exceptional dining experience at <span className="font-semibold text-[#211b16]">Saffron Dine</span>, located within 
            <span className="font-semibold text-[#211b16]"> Hotel Saffron</span>. Our restaurant presents a thoughtfully crafted menu that blends rich local heritage 
            with global flavors — all prepared with the finest ingredients.
            <br /><br />
            From elegant breakfasts to luxurious dinners, every dish is a feast for both the eyes and the palate. 
            Whether you’re staying at the hotel or visiting for a special meal, our warm ambiance, attentive service, 
            and gourmet cuisine promise a memorable experience.
          </p>
          <button onClick={()=> navigate("/login")} className="mt-8 px-8 py-3 bg-[#211b16] text-white font-semibold rounded-xl hover:bg-[#C4A484] hover:text-[#211b16] transition-all duration-300">
            Get Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default AbtHotel;
