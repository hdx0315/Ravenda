import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp  } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" w-full bg-pink-400 text-black font-bold">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Subscription Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-wider">Ravenda</h2>
            <p className="max-w-[600px] ">
              Subscribe to our newsletter for the latest trends, exclusive offers, and style tips.
            </p>
            <form className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 items-center justify-center">
              <input
                className="max-w-sm flex-1 bg-white text-black px-4 py-2 rounded-md"
                placeholder="Enter your email"
                type="email"
              />
              <button className="max-w-sm bg-white text-black hover:bg-gray-200 px-4 py-2 font-semibold rounded-md my-4 sm:my-4">
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a className="hover:underline" href="/">Home</a>
              <a className="hover:underline" href="/collections">Shop</a>
              <a className="hover:underline" href="/gallery">Gallery</a>
              <a className="hover:underline" href="#">Shipping & Returns</a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-black pt-8">
          <p className="text-sm ">©2024 Ravenda. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className=" hover:text-white">
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a href="#" className=" hover:text-white">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
