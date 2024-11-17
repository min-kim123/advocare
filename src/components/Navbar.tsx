import React, { useEffect } from 'react';
import Link from 'next/link';  // Import Next.js Link

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 flex items-center content-between z-[99] h-14 backdrop-blur-2xl">
      <Link href="/"><h1 className="logo dark-green-text text-2xl font-medium">advocare</h1></Link>
      <nav className="flex w-full flex-row justify-end items-center">
        {/* <a href="/" className="dark-green-text">Home</a>
        <a href="/support" className="dark-green-text">Support</a> */}
        <a href="/about-us" >About Us</a>
      </nav>
    </header>
  );
}

export default Navbar;