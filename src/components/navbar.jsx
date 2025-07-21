import React from 'react';
import logo from '../assets/logo.png'; 
const Navbar = ({ onClearAll }) => {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
      
      <div className="flex items-center gap-3">
        <img src={logo} alt="Taskly Logo" className="w-6 h-6" />
      <h1 className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
  Taskly
</h1>

      </div>

     
   
    </nav>
  );
};

export default Navbar;
