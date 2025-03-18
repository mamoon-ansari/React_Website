import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="bg-black-300 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold font-serif">Welcome to Rashid Shams Technical Services LLC</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white! hover:text-gray-300! text-xl">Home</Link>
          <Link to="/about" className="text-white! hover:text-gray-300! text-xl">About</Link>
          <Link to="/contact" className="text-white! hover:text-gray-300! text-xl">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;