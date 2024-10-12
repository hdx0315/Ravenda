import React, { useState } from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiX  } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">

      {/* Mobile navbar */}
      <div className="sm:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen?
            
            <FiX size={24}/>
            : 
            <FiMenu size={24} />
            }
          </button>

          <a href="/" className="text-3xl font-bold text-pink-500 font-sec">
            Ravenda
          </a>

          <div className="flex items-center">

            <button aria-label="Cart">
              <a href="/cart">
                <FiShoppingCart size={24} />
              </a>
            </button>

          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="bg-white px-4 mt-4 py-2 h-svh flex flex-col justify-between">
            <ul>
              <li>
                <a 
                  href="/" 
                  className="block py-3" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </a>
              </li>
 
              <li>
                <a 
                  href="/collections" 
                  className="block py-3" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  COLLECTIONS
                </a>
              </li>
 
              <li>
                <a 
                  href="/newArrivals" 
                  className="block py-3" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  NEW ARRIVALS
                </a>
              </li>
 
              <li>
                <a 
                  href="/hotDeals" 
                  className="block py-3" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOT DEALS
                </a>
              </li>
 
            </ul>
            <div className="mb-36">
              <button className="flex items-center py-2">
                <a href="/auth/login" className='flex items-center'>
                  <IoPersonOutline size={24} className="mr-2" />
                  LOG IN
                </a>
              </button>
            </div>
          </nav>
        )}
      </div>
      
      {/* Desktop navbar */}
      <div className="hidden sm:block">
        <div className="flex justify-between items-center px-6 py-4">
          <button aria-label="Search">
            <FiSearch size={24} />
          </button>

          <a href="/" className="text-4xl font-bold text-pink-500 font-sec">
          Ravenda
          </a>

          <div className="flex items-center">
            <button aria-label="User account" className="mr-8">
              <a href="/auth/login">
                <IoPersonOutline size={24} />
              </a>
            </button>

            <button aria-label="Cart">
              <a href="/cart">
                <FiShoppingCart size={24} />
              </a>
            </button>

          </div>
        </div>

        <nav className="border-t border-b border-gray-200">
          <ul className="flex justify-center space-x-8 py-4 font-bold">
            
          <li>
                <a 
                  href="/" 
                  className="block hover:text-pink-500 hover:text-xl transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </a>
              </li>
 
              <li>
                <a 
                  href="/collections" 
                  className="block hover:text-pink-500 hover:text-xl transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  COLLECTIONS
                </a>
              </li>
 
              <li>
                <a 
                  href="/newArrivals" 
                  className="block hover:text-pink-500 hover:text-xl transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  NEW ARRIVALS
                </a>
              </li>
 
              <li>
                <a 
                  href="/hotDeals" 
                  className="block hover:text-pink-500 hover:text-xl transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOT DEALS
                </a>
              </li>
 
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;