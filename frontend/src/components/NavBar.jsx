

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
//bg-gradient-to-bl from-white to-50%
//bg-gradient-to-l from-white to-50%

  return (

    <div className="flex">

      <header className="pr-4 lg:px-6 h-16 sm:h-24 flex items-center fixed top-0 w-full z-50 transition-colors duration-300 bg-gradient-to-b from-white to-99%">
        
        {/* Link to home page*/}
        <a className="pl-4 flex items-center justify-center" href="/">
          <span className="font-bold text-xl sm:text-3xl tracking-widest">Ravenda</span>
        </a>

        {/* Menu button for small screens. Hidden in large screens*/}
        <button
          className="ml-auto block sm:hidden text-2xl "
          onClick={toggleMenu}
        >
          <FiMenu />
        </button>

        {/* Navigation links */}
        <nav
        className={`
          ${isMenuOpen ? 'flex' : 'hidden' } 
          flex-col sm:flex-row sm:flex sm:ml-auto gap-4 sm:gap-6 absolute sm:static top-14 left-0 sm:left-auto w-full sm:w-auto shadow-none p-4 sm:p-0 items-end pr-8 justify-center font-extrabold text-lg bg-gradient-to-bl `}
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


