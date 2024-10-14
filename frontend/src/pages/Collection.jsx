// frontend/src/pages/Collection.jsx

import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { FiMenu } from 'react-icons/fi'; // Import the menu icon
import { Link } from 'react-router-dom';

function Collection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = 'Collections | Ravenda';
    fetchProducts(); // Fetch products when the component mounts

    return () => {
      document.title = 'Ravenda';
    };
  }, []);

  const fetchProducts = async () => {
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
      setProducts(allProducts);

    } catch (error) {
      setError(error.message || 'Failed to fetch products');
      console.error('Error fetching products:', error);
    }
  };

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || 'Others'; // Default to 'Others' if category is not defined

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {});

  // Extract sections from groupedProducts
  const collectionSections = Object.entries(groupedProducts).map(([title, products]) => ({
    title,
    description: `Explore our collection of ${title.toLowerCase()}.`,
    products,
  }));

  return (
    <div className="font-main m-0 p-0">
      <NavBar />

      {/* In-Page Navigation Links with Toggle for Small Screens */}
      <div className='text-pink-500 text-3xl font-bold flex justify-center mt-52'>
        Ravenda Collections
      </div>

      {/* Collection Sections */}
      <div className="">
        {error && <p className="text-red-500 text-center">
          {error}
        </p>}

        {collectionSections.map((section, index) => (
          <div
            key={index}
            id={`section-${index}`} // Section ID for linking
            className="flex flex-col pt-16 justify-center items-center"
          >
            <div className="w-2/3 text-center my-8 flex flex-col justify-center items-center">

              <h3 className="text-3xl font-bold text-gray-800">
                {section.title}
              </h3>

              <p className="text-lg text-gray-600">
                {section.description}
              </p>
            </div>

            {/* Cards Section */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-fit px-4 justify-items-center">
                {section.products.map((product) => (
                  <Link  className='flex justify-center' key={product._id} to={`/product/${product._id}`}>
                    <Card
                      img={product.image}
                      title={product.title}
                      description={product.category}
                      price={`Rs. ${product.price}.00`}
                    />
                  </Link>
                
                ))}
              </div>
              
            </div>
        ))}
      </div>
      
      <div className='my-20'></div>
      <Footer />
    </div>
  );
}

export default Collection;
