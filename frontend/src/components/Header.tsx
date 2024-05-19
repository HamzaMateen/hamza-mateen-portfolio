import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import NavBar from './NavBar';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center">
      <Logo width={50} height={50} />
      <NavBar />
      <DarkModeToggle />
    </header>
  );
};

export default Header;

