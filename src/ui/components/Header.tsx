// src/ui/components/Header.tsx
import React from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import ThemeButton from './ThemeButton';

const Header = () => {
  return (
    <header className='flex h-16 items-center justify-end gap-4 bg-slate-400 p-4'>
      <ThemeButton />
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
export default Header;
