
// frontend/src/pages/Products.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import NavBar from '../components/NavBar';
import useCartStore from '../store/useCartStore';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [error, setError] = useState(null);

  const cart = useCartStore((state) => state.cart)

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/productRoutes/getSingleProduct/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart({ ...product, selectedSize, selectedColor });
      alert('Item successfully added to cart!'); // Show success alert
      console.log(cart);
    } else {
      alert('Could not add item to cart. Please select size and color.'); // Show error alert
    }
  };

  // Log the updated cart value when it changes
  useEffect(() => {
    console.log('Updated cart:', cart);
  }, [cart]);
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-20 font-main">
      <NavBar />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold mb-4">Rs.{product.price} .00</p>
            <p className="text-muted-foreground mb-6">
              Elevate your style with our {product.title}. This piece combines comfort with trendy design elements.
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Select Size</h2>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <label key={size} className="relative">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="sr-only"
                    />
                    <span className={`flex items-center justify-center w-12 h-12 border-2 rounded-md cursor-pointer
                      ${selectedSize === size 
                        ? 'border-white bg-secondary_5 text-white font-bold' 
                        : 'border-input hover:bg-neutral-300 hover:text-black'
                      }`}>
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Select Color</h2>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <label key={color} className="relative">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="sr-only"
                    />
                    <span
                      className={`flex items-center justify-center w-12 h-12 border-2 rounded-md cursor-pointer capitalize
                        ${selectedColor === color
                          ? 'border-white bg-secondary_5 text-white font-bold' 
                          : 'border-input'
                        }`}
                      style={{
                        backgroundColor: selectedColor === color ? color : '',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = color}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                    >
                      {color}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className={`flex-1 bg-secondary_5 text-white px-4 py-2 rounded-md ${!selectedSize || !selectedColor ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!selectedSize || !selectedColor}
              onClick={handleAddToCart}
            >
              <div className='flex justify-center'>
                <IoCart size={30} /> <span className='ml-2'>Add to Cart</span>
              </div>
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Category: {product.category}</li>
              <li>Colors: {product.colors.join(', ')}</li>
              <li>Available sizes: {product.sizes.join(', ')}</li>
              {product.hotDeal && <li>🔥 Hot Deal</li>}
              {product.newArrival && <li>🌟 New Arrival</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
