

import React, { useState } from 'react';
//import logo from '../assets/logo_1.jpg';
import { FiMenu } from "react-icons/fi";

function NavBar() {

  // right side menu Open State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // change the state of menu open when click the menu icon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="flex flex-col">

      <header className="px-4 lg:px-6 h-16 sm:h-24 flex items-center fixed top-0 w-full z-50 transition-colors duration-300 bg-white shadow-md">
        
        {/* Link to home page*/}
        <a className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">Ravenda</span>
        </a>

        {/* Menu button for small screens. Hidden in large screens*/}
        <button
          className="ml-auto block sm:hidden text-2xl"
          onClick={toggleMenu}
        >
          <FiMenu />
        </button>

        {/* Navigation links */}
        <nav
        className={`
          ${isMenuOpen ? 'flex' : 'hidden' } 
          flex-col sm:flex-row sm:flex sm:ml-auto gap-4 sm:gap-6 absolute sm:static top-14 left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent shadow sm:shadow-none p-4 sm:p-0 items-center justify-center`}
>

          <a
            className="font-medium hover:underline underline-offset-4"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>


          <a
            className="font-medium hover:underline underline-offset-4"
            href="/collections"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </a>


          <a
            className="font-medium hover:underline underline-offset-4"
            href="/gallery"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </a>

        </nav>
      </header>
    </div>
  );
}

export default NavBar;


