import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './components/Home';
import Features from './components/Features';
import FeaturesBlocks from './components/FeaturesBlocks';
import Team from './components/Team';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: false,
      mirror:true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/featuresblocks' element={<FeaturesBlocks />} />
        <Route path='/team'element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
