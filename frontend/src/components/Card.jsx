import React from 'react';
import l2 from '../assets/logo/logo_2.jpg'

function Card(props) {
  return (
    <div className="w-9/12 h-9/12  bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        className="object-cover max-w-full "
        src={props.img}
        alt="Product"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          {props.title}
        </h2>

        <p className="text-gray-600 mt-1">
          {props.description}
        </p>

        <p className="text-gray-400 mt-1">
          {props.price}
        </p>

      </div>
    </div>
  );
}

export default Card;
