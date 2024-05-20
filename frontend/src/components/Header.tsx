import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import NavBar from './NavBar';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <Logo width={24} height={24} className="hidden md:block" />
      <NavBar />
      <DarkModeToggle />
    </header>
  );
};

export default Header;

