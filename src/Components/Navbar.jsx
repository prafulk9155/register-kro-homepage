import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white h-11 px-16">
      <div className="flex items-center">
        {/* Logo */}
        <img src={logo} alt="Register Karo Logo" className="h-8" /> {/* Adjust the height as needed */}
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      <div className={`flex-col lg:flex lg:flex-row lg:space-x-4 text-black ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <span className="flex items-center py-2 px-4 lg:px-0 lg:py-0">Home</span>
        <span className="flex items-center py-2 px-4 lg:px-0 lg:py-0">Our Services</span>
        <span className="flex items-center py-2 px-4 lg:px-0 lg:py-0">Blog</span>
        <span className="flex items-center py-2 px-4 lg:px-0 lg:py-0">Contact Us</span>
        <span className="flex items-center py-2 px-4 lg:px-0 lg:py-0">About Us</span>
        <span className="flex items-center py-2 px-4 lg:px-0 lg:py-0">
          <FaSearch />
        </span>
        <button className="flex items-center py-2 p-4 lg:px-0 lg:py-0 bg-[#FFA229] text-white rounded hover:bg-[#FFA230] ">
            Talk to an Expert
          </button>
      </div>
    </nav>
  );
};

export default Navbar;