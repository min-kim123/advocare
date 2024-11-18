import React, { useEffect } from 'react';
import Link from 'next/link';  // Import Next.js Link
import Image from 'next/image';

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 flex items-center content-between z-[99] h-14 backdrop-blur-2xl">
      <Link href="/"><Image
          src="/logo.png"  // Path relative to public directory
          alt="Advocare Logo"
          width={200}     // Adjust size as needed
          height={40}     // Adjust size as needed
          className="ml-4"  // Add margin if needed
        /></Link>
      <nav className="flex w-full flex-row justify-end items-center">
        {/* <a href="/" className="dark-green-text">Home</a>
        <a href="/support" className="dark-green-text">Support</a> */}
        <a href="/about" >About Us</a>
      </nav>
    </header>
  );
}

export default Navbar;