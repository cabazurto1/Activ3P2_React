// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2024 Mi Proyecto</p>
        <div className="mt-2">
          <a href="https://www.facebook.com" className="mx-2">Facebook</a>
          <a href="https://www.twitter.com" className="mx-2">Twitter</a>
          <a href="https://www.instagram.com" className="mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
