"use client";
// @flow strict
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Hassan Adil
          </Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-[#0d1224] flex flex-col items-center justify-center space-y-6 text-lg font-semibold text-white transition-transform duration-300 md:static md:flex md:flex-row md:space-x-1 md:space-y-0 md:bg-transparent md:h-auto md:w-auto md:opacity-100 z-40 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}`}
          id="navbar-default"
        >
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about" onClick={() => setMenuOpen(false)}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;