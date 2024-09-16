import React from 'react';

function Card() {
  return (
    <div className="w-9/12 h-9/12  bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        className="object-cover w-full h-2/3"
        src="https://placehold.co/400x400.png"
        alt="Product"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">Product Name</h2>
        <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet.</p>
        <p className="text-gray-400 mt-1">$99.99</p>
      </div>
    </div>
  );
}

export default Card;
