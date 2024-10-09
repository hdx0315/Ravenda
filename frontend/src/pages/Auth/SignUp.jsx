import React from 'react';

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-main">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6 text-pink-500">Sign Up</h1>
        
        <form>
          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium ">Full Name</label>
            <input 
              type="text"
              id="name"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium ">Email</label>
            <input 
              type="email"
              id="email"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium ">Password</label>
            <input 
              type="password"
              id="password"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-lg font-medium ">Confirm Password</label>
            <input 
              type="password"
              id="confirm-password"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button 
              type="submit"
              className="w-full px-6 py-3 text-lg font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-md focus:outline-none focus:ring-4 focus:ring-gray-400 transition-transform transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <p className="mt-8 text-center text-gray-500">
          Already have an account? 
          <a href="/auth/login" className="ml-2 text-pink-500 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
