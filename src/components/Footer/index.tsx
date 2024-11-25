"use client"

import React from 'react';

const Footer = () => {
    return (
     <footer className="bg-[#1c2434] text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Project Management Dashboard. All Rights Reserved.
      </footer>
    );
};

export default Footer;