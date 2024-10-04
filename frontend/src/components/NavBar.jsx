import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import SignOutModal from '../components/SignOutModal';

function NavBar() {
  // Right side menu Open State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Profile menu Open State
  const [isProfMenuOpen, setIsProfMenuOpen] = useState(false);

  // Change the state of the main menu when clicking the menu icon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Change the state of the profile menu when clicking the profile icon
  const toggleProfileMenu = () => {
    setIsProfMenuOpen(!isProfMenuOpen);
  };

  return (
    <div className="flex">
      <header className="pr-4 lg:px-6 h-16 sm:h-24 flex items-center fixed top-0 w-full z-50 transition-colors duration-300 bg-gradient-to-b from-white to-99%">
        {/* Link to home page */}
        <a className="pl-4 flex items-center justify-center" href="/">
          <span className="font-bold text-xl sm:text-3xl tracking-widest">Ravenda</span>
        </a>

        {/* Menu button for small screens. Hidden in large screens */}
        <button
          className="ml-auto block sm:hidden text-2xl"
          onClick={toggleMenu}
        >
          <FiMenu />
        </button>

        {/* Navigation links */}
        <nav
          className={`
            ${isMenuOpen ? 'flex' : 'hidden'}
            flex-col sm:flex-row sm:flex sm:ml-auto gap-4 sm:gap-6 absolute sm:static top-14 left-0 sm:left-auto w-full sm:w-auto shadow-none p-4 sm:p-0 items-end pr-8 justify-center font-extrabold text-lg 
          `}
        >
          <a
            className="text-lg font-semibold p-4 hover:text-primary hover:bg-black hover:rounded-lg transition-colors tracking-wider"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>

          <a
            className="text-lg font-semibold p-4 hover:text-primary hover:bg-black hover:rounded-lg transition-colors tracking-wider"
            href="/collections"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </a>

          <a
            className="text-lg font-semibold p-4 hover:text-primary hover:bg-black hover:rounded-lg transition-colors tracking-wider"
            href="/newArrivals"
            onClick={() => setIsMenuOpen(false)}
          >
            New Arrivals
          </a>

          {/* Profile Menu */}
          <div className="relative">
            <button
              className="text-3xl font-semibold p-4 hover:text-primary hover:bg-black hover:rounded-lg transition-colors tracking-wider"
              onClick={toggleProfileMenu}
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
                {/*<li>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signOutModal">
                    Sign Out
                  </button>
                </li>
                <li>
                  <SignOutModal />
                </li>*/}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
