

// frontend/src/pages/admin/Dashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/admin/newProduct');
  };

  const handleEditItem = () => {
    navigate('/admin/editItem');
  };


  const handleLogout = async () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
        if (!confirmed) return;

    
    try {
      
      await fetch('http://localhost:3000/api/v1/admin/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Clear the token from local storage
      localStorage.removeItem('token');

      // Redirect to the login page
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">

        <h1 className="text-2xl font-semibold text-black mb-6">
          Admin Dashboard
        </h1>

        <div className="space-y-4 flex flex-col justify-center items-center">
          <button
            onClick={handleAddProduct}
            className="w-72 bg-sky-300 text- py-2 px-4 rounded-lg hover:bg-sky-500  hover:text-white transition duration-300"
          >
            Add a New Product
          </button>

          <button
            onClick={handleEditItem}
            className="w-72 bg-emerald-400 text- py-2 px-4 rounded-lg hover:bg-emerald-600  hover:text-white transition duration-300"
          >
            Edit Item
          </button>

          <button onClick={handleLogout} className="w-72 bg-rose-400 text- py-2 px-4 rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
          >
            Logout
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;