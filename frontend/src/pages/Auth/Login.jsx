import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted' , {email, password});
  }

  const handleSignUpClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    navigate('/SignUp', { replace: true });
  };
  
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-bold">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Please login to your account
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button onClick={handleSubmit} 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" onClick={handleSignUpClick} className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;