
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import HomePage from './screens/HomePage';
import SignUpPage from './screens/SignUpPage';
import LoginPage from './screens/LoginPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
