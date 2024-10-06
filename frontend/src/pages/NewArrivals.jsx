// frontend/src/pages/NewArrivals.jsx

import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function NewArrivals() {
  const [newProducts, setNewProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the new arrival products when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/productRoutes/getAllProducts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const allProducts = await response.json();
        console.log(allProducts);

        // Filter products where newArrival is true
        const filteredNewArrivals = allProducts.filter(product => product.newArrival === true);

        // Update the state with the filtered products
        setNewProducts(filteredNewArrivals);
      } catch (error) {
        setError(error.message || 'Failed to fetch products');
        console.error('Error fetching products:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-fit font-main">
      <NavBar />

      {error && <p>{error}</p>}

      {/* Title Section */}
      <div className="text-center pt-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-main mb-4">
          New Arrivals
        </h2>
        <p className="text-gray-600 text-lg sm:text-2xl">
          Discover the latest trends fresh off the runway.
        </p>
      </div>

      {/* Products Grid Section */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8 justify-items-center">
          {newProducts.map((product) => (
            <Link className='flex justify-center' key={product._id} to={`/product/${product._id}`}>
              
            <Card
              key={product._id}
              img={product.image}
              title={product.title}
              description={product.category}
              price={`$${product.price}`}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
