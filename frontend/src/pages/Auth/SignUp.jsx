import React, { useState } from 'react'
import { Navigate, replace, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Account Created' , {email,password,username});

  }


  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-50 p-4'>
      <div className='w-full max-w-lg bg-white p-8 rounded-lg shadow-md'>
        <div className='text-center mb-6'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-blue-600 font-bold'>New User
          </h1>
          <p className='text-gray-500 text-sm md:text-base'>
            Please Sign Up
          </p>
          <form className="space-y-6 pt-2" onClick={handleSubmit}> 
            <div>
              <label 
               htmlFor="input"
               className="block text-sm font-medium text-gray-700"
               value ={username} onChange={(e) => setUsername(e.target.value)}
               >
                Full Name
              </label>
              <input
              type="input"
              id="input"
              placeholder="Username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            </div>
            <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
              value={email} onChange={(e) => setEmail(e.target.value)}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
            <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
              value={password} onChange={(e) =>setPassword(e.target.value)}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button onClick={handleSubmit} 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
