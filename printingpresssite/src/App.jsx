
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import HomePage from './screens/HomePage';
import SignUpPage from './screens/SignUpPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
