import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { FiMenu } from 'react-icons/fi'; // Import the menu icon

function Collection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = 'Collections | Ravenda';
    return () => {
      document.title = 'Ravenda';
    };
  }, []);

  const collectionSections = [
    {
      title: 'Frocks',
      description: 'Discover our latest frock designs for every occasion.',
    },
    {
      title: 'Tops',
      description: 'Explore stylish tops to elevate your casual or formal look.',
    },
    {
      title: 'Bottoms',
      description: 'Find the perfect pair of bottoms to complete your wardrobe.',
    },
    {
      title: 'Office Wear',
      description: 'Professional office wear that blends style with comfort.',
    },
  ];

  return (
    <div className="font-main m-0 p-0">
      <NavBar />

      {/* In-Page Navigation Links with Toggle for Small Screens */}
      <div className="fixed top-24 left-0 w-full z-10 p-1">
        {/* Menu button for small screens */}
        <button
          className="block sm:hidden text-2xl ml-auto p-2 "
          onClick={toggleMenu}
        >
          Collections
        </button>

        {/* Navigation links (shown or hidden based on the menu state) */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col sm:flex sm:flex-row justify-end items-end mt-2 sm:mt-0`}
        >
          {collectionSections.map((section, index) => (
            <li key={index} className="mb-6">
              <a
                href={`#section-${index}`}
                className="text-lg font-semibold p-4 bg-white sm:bg-transparent hover:text-primary hover:bg-black hover:rounded-lg transition-colors tracking-wider"
                onClick={() => setIsMenuOpen(false)} // Close the menu after clicking a link
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Collection Sections */}
      <div className="mt-32 border-2 border-red-500">
        {collectionSections.map((section, index) => (
          <div
            key={index}
            id={`section-${index}`} // Section ID for linking
            className="flex flex-col pt-28 justify-center items-center"
          >
            <div className="w-2/3 text-center my-8 flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold text-gray-800">{section.title}</h3>
              <p className="text-lg text-gray-600">{section.description}</p>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-8 justify-center items-center ">
                <Card />
                <Card />
              </div>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <Card />
                <Card />
              </div>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <Card />
                <Card />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Collection;
