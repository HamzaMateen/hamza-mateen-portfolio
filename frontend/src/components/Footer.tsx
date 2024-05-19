import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center">
      <p className="text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Hamza Mateen's Tech Portfolio. All rights reserved. </p>
    </footer>
  );
};

export default Footer;

