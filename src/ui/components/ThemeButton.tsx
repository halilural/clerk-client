'use client';
import React from 'react';
import { BsMoonStars, BsMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='ml-2 flex h-9 w-9 justify-center rounded-full bg-gray-800 md:p-0'>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? (
          <BsMoonFill className='h-6 w-6 rounded-full text-gray-100' />
        ) : (
          <BsMoonStars className='h-6 w-6 rounded-full text-gray-100' />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
