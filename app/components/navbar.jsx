'use client';

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-[#16f2b3] text-3xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          Albin K Mathew
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          className={`
            absolute left-0 w-full bg-gray-900 md:bg-transparent transition-all duration-300
            md:static md:flex md:w-auto md:flex-row md:space-x-1 md:opacity-100 md:h-auto
            ${isOpen ? 'mt-4 opacity-100 max-h-screen border-t border-gray-700' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <li><Link href="/#about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
          <li><Link href="/#experience" onClick={() => setIsOpen(false)}>EXPERIENCE</Link></li>
          <li><Link href="/#skills" onClick={() => setIsOpen(false)}>SKILLS</Link></li>
          <li><Link href="/#education" onClick={() => setIsOpen(false)}>EDUCATION</Link></li>
          <li><Link href="/blog" onClick={() => setIsOpen(false)}>BLOGS</Link></li>
          <li><Link href="/#projects" onClick={() => setIsOpen(false)}>PROJECTS</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
