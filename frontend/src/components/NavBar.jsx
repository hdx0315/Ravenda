import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfMenuOpen, setIsProfMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfMenuOpen(!isProfMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white to-99%">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-24">
          {/* Logo */}
          <a className="flex items-center" href="/">
            <span className="font-bold text-xl sm:text-3xl tracking-widest">Ravenda</span>
          </a>

          {/* Menu button for small screens */}
          <button
            className="sm:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>

          {/* Navigation links */}
          <nav
            className={`
              ${isMenuOpen ? 'flex' : 'hidden'}
              sm:flex flex-col sm:flex-row gap-4 sm:gap-6 absolute sm:static top-16 left-0 right-0 sm:left-auto
              bg-transparent shadow-md sm:shadow-none p-4 sm:p-0
            `}
          >
            <a
              className="text-lg font-semibold p-2 hover:bg-white hover:rounded-lg transition-colors tracking-wider"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="text-lg font-semibold p-2 hover:bg-white hover:rounded-lg transition-colors tracking-wider"
              href="/collections"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              className="text-lg font-semibold p-2 hover:bg-white  hover:rounded-lg transition-colors tracking-wider"
              href="/cart"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </a>

            {/* Profile Menu */}
            <div className="relative">
              <button
                className="text-3xl font-semibold p-2 hover:bg-white hover:rounded-lg transition-colors tracking-wider"
                onClick={toggleProfileMenu}
                aria-label="Toggle profile menu"
              >
                <IoPersonCircleOutline />
              </button>
              {/* Profile dropdown */}
              {isProfMenuOpen && (
                <ul className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-lg shadow-lg border border-gray-200">
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/auth/login">Log In</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="/auth/signOut">Sign Out</a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;