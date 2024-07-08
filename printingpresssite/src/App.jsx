
import React, { Suspense } from 'react';
import { lazy } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import NewNav from './components/NewNav.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import HelpScreen from './screens/HelpScreen.jsx';
import StoreLocator from './screens/StoreLocator.jsx';
// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
const HomePage = lazy(() => import('./screens/HomePage.jsx'));
const LoginPage = lazy(() => import('./screens/auth/LoginPage.jsx'));
const SignUpPage = lazy(() => import('./screens/auth/SignUpPage.jsx'));
// import SignUpPage from './screens/auth/SignUpPage';
// import LoginPage from './screens/auth/LoginPage';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Suspense fallback={<NewNav />}><HomePage /></Suspense>} />
          <Route path='/signup' element={<Suspense fallback={<NewNav />}><SignUpPage /></Suspense>} />
          <Route path='/login' element={<Suspense fallback={<LoadingScreen />}><LoginPage /></Suspense>} />
          <Route path='/load' element={<LoadingScreen />} />
          <Route path='/help' element={<Suspense fallback={<LoadingScreen />}> <HelpScreen /></Suspense>} />
          <Route path='/locate-store' element={<Suspense fallback={<LoadingScreen />}><StoreLocator /></Suspense>} />

        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
