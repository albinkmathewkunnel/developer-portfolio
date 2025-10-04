// @flow strict
'use client';
import Link from "next/link";
import { useState } from "react"; // 1. Import useState
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // 2. Optional: Add a simple icon library

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 3. State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold"
            onClick={() => setIsOpen(false)} // Close menu on logo click
          >
            Albin K Mathew
          </Link>
        </div>

        {/* 4. Mobile Menu Button (Hamburger) - Only visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Display close icon when open, menu icon when closed */}
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* 5. Navigation List */}
        <ul
          // Dynamic classes to control visibility and animation based on 'isOpen' state
          className={`
            absolute left-0 w-full bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out
            md:static md:flex md:w-auto md:flex-row md:space-x-1 md:opacity-100 md:h-auto md:mt-0
            ${isOpen ? 'mt-4 opacity-100 max-h-screen border-t border-gray-700' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
          id="navbar-default"
        >
          {/* Menu Items (use a consistent function to close the menu) */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about" onClick={() => setIsOpen(false)}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience" onClick={() => setIsOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills" onClick={() => setIsOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education" onClick={() => setIsOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog" onClick={() => setIsOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects" onClick={() => setIsOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;