"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          BitLinks
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/shorten" className="hover:text-gray-300">
            Short URL
          </Link>
          <Link
            href="/shorten"
            className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-gray-100 font-medium"
          >
            Try Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-4">
          <Link
            href="/"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/shorten"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Short URL
          </Link>
          <Link
            href="/shorten"
            className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Try Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
