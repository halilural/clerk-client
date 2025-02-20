'use client';
// src/ui/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import ThemeButton from './ThemeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, []);

  return (
    <header className='sticky top-0 z-50'>
      <nav className='border-gray-200 bg-white px-4 py-2.5 shadow dark:bg-gray-800 lg:px-6'>
        <div className='mx-auto flex max-w-screen-lg flex-wrap items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              Logo
            </span>
          </Link>

          <div
            className={`w-full flex-col items-center transition-all duration-300 md:order-2 md:flex md:w-auto md:flex-row ${
              nav
                ? 'absolute left-0 top-14 w-full bg-white p-4 shadow-md md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none'
                : 'hidden gap-6 md:flex'
            }`}
          >
            <ul className='flex flex-col gap-0 md:flex-row md:gap-8'>
              <li>
                <Link
                  href='/'
                  className='md:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='md:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='/contact-us'
                  className='md:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <SignInButton>
                  <Link
                    href='#'
                    className='md:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white'
                  >
                    Sign In
                  </Link>
                </SignInButton>
              </li>
              {/* Add more links here */}
            </ul>
            <SignUpButton>
              <button
                className='mt-4 rounded-full border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:shadow-lg focus:bg-slate-700 md:mt-0'
                type='button'
              >
                Sign Up Now
              </button>
            </SignUpButton>
            {!nav && <ThemeButton />}
          </div>

          {/* Hamburger Icon */}
          <div className='flex items-center md:hidden lg:order-1'>
            <ThemeButton />
            <button
              type='button'
              className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none'
              aria-controls='mobile-menu'
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className='sr-only'>Open main menu</span>
              {nav ? (
                <FontAwesomeIcon icon={faTimes} className='h-6 w-6' />
              ) : (
                <FontAwesomeIcon icon={faBars} className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
