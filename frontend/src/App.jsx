import React from 'react'

import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import SignUp from './pages/Auth/SignUp'
import Expense from './pages/Dashboard/Expense'
import Income from './pages/Dashboard/Income'
import Login from './pages/Auth/Login'
import Home from './pages/Dashboard/Home'
const App = () => {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Root/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/SignUp' exact element={<SignUp/>}/>
          <Route path='/Expense' exact element={<Expense/>}/>
          <Route path='/Home' exact element={<Home/>}/>
          <Route path='/Income' exact element={<Income/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root=()=>{
  const isAuthenticated = !! localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/Dashboard"/>
  ): (
    <Navigate to="/login"/>
  );
}
