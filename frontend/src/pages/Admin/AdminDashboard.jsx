

// src/pages/admin/Dashboard.jsx
// src/pages/admin/Dashboard.jsx
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Admin Dashboard</h1>
        <div className="space-y-4">
          <button
            onClick={handleAddProduct}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add a New Product
          </button>
          <button
            onClick={handleEditItem}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Edit Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
