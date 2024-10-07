// frontend/src/pages/HotDeals.jsx

import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function HotDeals() {

  const [hotProducts, setHotProducts] = useState([]);
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
        const filteredHotProducts = allProducts.filter(product => product.hotDeal === true);

        // Update the state with the filtered products
        setHotProducts(filteredHotProducts);
      } catch (error) {
        setError(error.message || 'Failed to fetch products');
        console.error('Error fetching products:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    
        <div className="min-h-fit font-main">
          
          
        <NavBar/>
          {/* Title Section */}
          <div className="text-center pt-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-main mb-4">
              Hot Deals
            </h2>
            <p className="text-gray-600 text-lg sm:text-2xl">
            Don't miss out on the hottest discounts and exclusive sales!
            </p>
          </div>
    

      {/* Products Grid Section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8 justify-items-center place-items-center">
          {hotProducts.map((product) => (
            <Link className='flex justify-center'  key={product._id} to={`/product/${product._id}`}>
              <Card
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
    



  )
}

export default HotDeals