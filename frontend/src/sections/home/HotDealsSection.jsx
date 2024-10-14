import React, { useEffect, useState } from 'react'; 
import Card from '../../components/Card';
import { Link } from 'react-router-dom';


function HotDealsSection() {
const [newProducts, setNewProducts] = useState([]);
const [error, setError] = useState(null);
const [itemsToShow, setItemsToShow] = useState(2); // Default to 2 items for small screens

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
      const filteredNewArrivals = allProducts.filter(product => product.hotDeal === true);

      // Update the state with the filtered products
      setNewProducts(filteredNewArrivals);
    } catch (error) {
      setError(error.message || 'Failed to fetch products');
      console.error('Error fetching products:', error);
    }
  };

  fetchItems();
}, []);

// Adjust the number of items to show based on screen size
useEffect(() => {
  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      setItemsToShow(6); // Show 6 items on large screens
    } else if (screenWidth >= 768) {
      setItemsToShow(3); // Show 3 items on medium screens
    } else {
      setItemsToShow(2); // Show 2 items on small screens
    }
  };

  // Call on initial render
  updateItemsToShow();

  // Add event listener to update on window resize
  window.addEventListener('resize', updateItemsToShow);

  // Clean up event listener on unmount
  return () => window.removeEventListener('resize', updateItemsToShow);
}, []);

return (
  <div className="min-h-fit pb-16 pt-16 lg:pt-24 px-8 lg:px-16">
    
    {/* Title Section */}
    <div className="text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-black font-main mb-4 tracking-wider">
        HOT DEALS
      </h2>
      <p className="text-gray-600 text-lg sm:text-2xl">
      Don't miss out on the hottest discounts and exclusive sales!
      </p>
    </div>

    {/* Product Grid */}
    <div className="flex items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8 justify-items-center">
        {newProducts
          .slice(0, itemsToShow) // Show only the number of items based on the screen size
          .map((product, index) => (
            <Link className='flex justify-center' key={product._id} to={`/product/${product._id}`}>
              {/* You can now use the `index` */}
              <Card
                key={product._id}
                img={product.image}
                title= {product.title}
                description={product.category}
                price={`RS. ${product.price}`}
              />
            </Link>
        ))}
      </div>
    </div>
          
    <div className="flex justify-center w-full mt-8">
          <a href="/hotDeals" className="group">
            <button className="px-8 py-4 text-white font-bold bg-pink-300 hover:bg-pink-400 hover:text-black tracking-widest rounded-lg text-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
              See All Hot Deals
            </button>
          </a>
    </div>
  </div>
);
}

export default HotDealsSection;