import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center">
      <p>
        © {new Date().getFullYear()} Hamza Mateen's Tech Portfolio. All rights reserved. </p>
    </footer>
  );
};

export default Footer;

