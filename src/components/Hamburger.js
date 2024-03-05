"use client"
import React from 'react';

const HamburgerButton = ({ onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button onClick={handleClick} className="flex flex-col justify-around w-9 h-9 bg-transparent border-none cursor-pointer">
      <span className="block w-full h-1 bg-white rounded-md"></span>
      <span className="block w-full h-1 bg-white rounded-md"></span>
      <span className="block w-full h-1 bg-white rounded-md"></span>
    </button>
  );
};

export default HamburgerButton;
