import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function AbtSoftware() {
  let navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9e6] to-[#fff1cc] flex flex-col">
      <Header />
      
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white/70 backdrop-blur-md shadow-2xl border border-[#e5e5e5] p-8 rounded-3xl max-w-3xl text-center">
          
          <h2 className="text-4xl font-bold text-[#211b16] mb-6">Discover MenuEscape</h2>
          
          <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
            Say goodbye to traditional printed menus and embrace a smarter, greener future with <span className="font-semibold text-[#211b16]">MenuEscape</span>. 
            Our platform empowers restaurants, cafes, and food outlets to digitize their menus effortlessly—providing customers with a clean, modern, 
            and contactless experience straight from their smartphones.
            <br /><br />
            Designed for convenience and sustainability, MenuEscape helps your business save costs, reduce waste, and elevate your brand image. 
            It's time to simplify your service and impress your guests with a seamless digital dining experience.
          </p>
          
          <button onClick={()=> navigate("/login")} className="mt-8 px-8 py-3 bg-[#211b16] text-white font-semibold rounded-xl hover:bg-[#C4A484] hover:text-[#211b16] transition-all duration-300">
            Get Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default AbtSoftware;
