import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="h-[13vh] w-full bg-[#211b16] px-6 md:px-12 shadow-md flex items-center justify-between">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
       
        <h1 className="text-white font-serif text-2xl font-bold tracking-wide">
          MenuEscape
        </h1>
      </div>

      <nav>
        <ul className="hidden md:flex gap-10 text-white font-mono text-[15px]">
          <li
            onClick={() => navigate('/ratings')}
            className="cursor-pointer hover:text-[#C4A484] transition duration-300"
          >
            GIVE US RATING
          </li>
          <li
            onClick={() => navigate('/about_software')}
            className="cursor-pointer hover:text-[#C4A484] transition duration-300"
          >
            ABOUT OUR SOFTWARE
          </li>
          <li
            onClick={() => navigate('/about_restaurant')}
            className="cursor-pointer hover:text-[#C4A484] transition duration-300"
          >
            ABOUT RESTAURANT
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
