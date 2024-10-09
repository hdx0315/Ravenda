

// frontend/src/pages/admin/Dashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Edit, ShoppingBag, LogOut } from 'lucide-react';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/admin/newProduct');
  };

  const handleEditItem = () => {
    navigate('/admin/editItem');
  };

  const handleViewOrders = () => {
    navigate('/admin/orders');
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Admin Dashboard
        </h1>

        <div className="space-y-6">
          <button
            onClick={handleAddProduct}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-2 shadow-md"
          >
            <PlusCircle size={20} />
            <span>Add a New Product</span>
          </button>

          <button
            onClick={handleEditItem}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2 shadow-md"
          >
            <Edit size={20} />
            <span>Edit Item</span>
          </button>

          <button
            onClick={handleViewOrders}
            className="w-full bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition duration-300 flex items-center justify-center space-x-2 shadow-md"
          >
            <ShoppingBag size={20} />
            <span>View Orders</span>
          </button>

          <button 
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center space-x-2 shadow-md"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;