import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaPinterest, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between bg-[#1C4670] h-auto lg:h-11 px-4">
      <div className="flex-grow"></div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? '✖' : '☰'} 
        </button>
      </div>

      <div className={`flex-col lg:flex lg:flex-row lg:space-x-4 text-white ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <a 
          href="https://www.registerkaro.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline py-2 px-4 lg:px-0 lg:py-0 text-center"
        >
          www.registerkaro.in
        </a>
        <span>|</span>
        <span className="flex items-center py-2 px-4 lg:px-0 lg:py-0">
          <FaPhone className="mr-1" /> +918447746183
        </span>
        <span className="py-2 px-4 lg:px-2   lg:py-0">|</span>
        
        {/* Social Media Icons */}
        <div className="flex space-x-2 py-2">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.pinterest.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;