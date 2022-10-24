import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../assets/logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Header() {

  const [top, setTop] = useState(true);

  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

   const handleClose =()=> setNav(!nav)

    

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full h-20 z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-7 sm:px-9 mt-2">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} alt='logo' className='mt-5 sm:mt-5 lg:mt-1' width="150" height="96" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-row">
            <ul className='hidden md:flex'>
            <li>
                <Link to="/features" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</Link>
              </li>
            <li>
                <Link to="/featuresblocks" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Our Services</Link>
              </li>

            <li>
                <Link to="/team" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Team</Link>
              </li>
              <li>
                <Link to="/contact" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
            <li>
                <Link to="/signin" className="hidden md:flex pr-4 font-medium text-gray-600 hover:text-gray-900 px-5 py-3 items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
            <li>
                <Link to="/signup" className="hidden md:flex pr-4 btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>

            <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
            </div>
          </nav>

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li>
                <Link onClick={handleClose} to='/features' className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</Link>
              </li>
            <li>
                <Link onClick={handleClose} to='/featuresblocks' className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Our Services</Link>
              </li>

            <li>
                <Link onClick={handleClose} to='/team' className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Team</Link>
              </li>
              <li>
                <Link onClick={handleClose} to='/contact' className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
            <li>
                <Link  onClick={handleClose} to='/signin' className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
            <li>
                <Link onClick={handleClose} to='/signup' className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>
    </header>
  );
}

export default Header;
