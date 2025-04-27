import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#211b16] text-white py-8 w-full mt-10">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        {/* Copyright */}
        <p className="text-center sm:text-left text-sm sm:text-base font-light">
          &copy; 2025 MenuEscape. All rights reserved. 
          <br />
          Software created by Akshat Choukse.
        </p>

        {/* Social Media Buttons */}
        <div className="flex space-x-8 mt-4 sm:mt-0">
          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full transition duration-300 hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5 text-[#211b16] hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.35C0 23.405.595 24 1.325 24h11.493v-9.294H9.547v-3.622h3.271V8.144c0-3.221 1.906-5.011 5.003-5.011 1.463 0 2.956.284 2.956.284v3.26h-1.667c-1.595 0-2.091.987-2.091 2.003v2.403h3.479l-.557 3.622h-2.922v9.294h5.743c.73 0 1.325-.595 1.325-1.325V1.325c0-.73-.595-1.325-1.325-1.325z"
              />
            </svg>
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full transition duration-300 hover:bg-blue-400"
          >
            <svg
              className="w-5 h-5 text-[#211b16] hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.7 10.7 0 01-3.14.86 5.37 5.37 0 002.38-2.96A10.58 10.58 0 01-1 5.58 5.34 5.34 0 0016.88 2c-3.06 0-5.54 2.48-5.54 5.54 0 .43.05.85.13 1.26-4.61-.23-8.69-2.43-11.43-5.77-.48.82-.75 1.76-.75 2.76 0 1.91 1 3.59 2.44 4.57a5.3 5.3 0 01-2.51-.69c-.06 2.54 1.82 4.68 4.28 5.18a5.27 5.27 0 01-2.45.09c.69 2.16 2.69 3.73 5.05 3.77a10.71 10.71 0 01-6.64 2.29c-.43 0-.86-.03-1.28-.08a15.24 15.24 0 008.27 2.42c9.94 0 15.38-8.23 15.38-15.38 0-.23-.01-.46-.02-.68A10.84 10.84 0 0023 3z"
              />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full transition duration-300 hover:bg-pink-500"
          >
            <svg
              className="w-5 h-5 text-[#211b16] hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.22 2.28c-.8 0-1.45.65-1.45 1.45v16.54c0 .8.65 1.45 1.45 1.45h9.56c.8 0 1.45-.65 1.45-1.45V3.73c0-.8-.65-1.45-1.45-1.45H7.22zm0 1.45h9.56c.03 0 .06.03.06.06v16.54c0 .03-.03.06-.06.06H7.22a.06.06 0 01-.06-.06V3.73c0-.03.03-.06.06-.06zm4.34 4.61c1.84 0 3.34 1.5 3.34 3.34 0 1.84-1.5 3.34-3.34 3.34-1.84 0-3.34-1.5-3.34-3.34 0-1.84 1.5-3.34 3.34-3.34zm0 1.45c-.96 0-1.77.81-1.77 1.77s.81 1.77 1.77 1.77 1.77-.81 1.77-1.77-.81-1.77-1.77-1.77zm5.87-.35c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7.01-.39.32-.7.7-.7.39 0 .7.31.7.7z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
