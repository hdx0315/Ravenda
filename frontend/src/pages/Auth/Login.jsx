import React from 'react';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-main">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign In</h1>
        
        <form>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
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
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input 
              type="password"
              id="password"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button 
              type="submit"
              className="w-full px-6 py-3 text-lg font-semibold text-white bg-secondary_2 hover:bg-secondary_5 rounded-md focus:outline-none focus:ring-4 focus:ring-gray-400 transition-transform transform hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-gray-500">
          Don't have an account? 
          <a href="/auth/signup" className="ml-2 text-secondary_5 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
