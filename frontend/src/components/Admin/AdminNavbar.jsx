// frontend/src/components/Admin/AdminNavbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {

  const navigate = useNavigate();
  
  const handleLogout = async () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
        if (!confirmed) return;

    try {
      // Optionally call the backend logout route
      await fetch('http://localhost:3000/api/v1/admin/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Clear the token from local storage
      localStorage.removeItem('token');

      // Redirect to the login page
      navigate('/admin/login'); // Redirect using React Router
    } catch (error) {
      console.error('Logout failed', error);
    }
  };


  return (
    <nav className=" text-black">
      <div className="max-w-9xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold hover:bg-lime-300 border-2 p-2 px-4 border-transparent rounded-lg">Ravenda Admin</div>
        <div>
          <Link
            to="/admin/dashboard"
            className="px-4 py-2 hover:bg-gray-300 rounded transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/editItem"
            className="px-4 py-2 hover:bg-gray-300 rounded transition duration-300"
          >
            Edit Items
          </Link>
          <Link
            to="/admin/newProduct"
            className="px-4 py-2 hover:bg-gray-300 rounded transition duration-300"
          >
            Add Item
          </Link>
          <Link
            to=""
            onClick={handleLogout}
            className="px-4 py-2 hover:bg-red-500 rounded transition duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
