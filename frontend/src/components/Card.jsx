
//  frontend/src/components/Card.jsx
import React from 'react';

function Card(props) {
  return (
    <div className="w-9/12 h-9/12 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        className="object-cover max-w-full"
        src={props.img}
        alt="Product"
      />
      <div className="p-4 text-center">
        {/* Title */}
        <h2 className={`text-black font-bold text-xl tracking-wider mt-1 ${props.titleStyles}`}>
          {props.title}
        </h2>

        {/* Description */}
        <p className={`text-black tracking-wider mt-1 ${props.descStyles}`}>
          {props.description}
        </p>

        {/* Price */}
        <p className={`text-black font-bold text-xl tracking-wider mt-1 ${props.priceStyles}`}>
          {props.price}
        </p>
      </div>
    </div>
  );
}

export default Card;
