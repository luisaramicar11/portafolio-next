"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-second-color py-4">
      <section className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/home" className="text-first-color font-bold text-2xl">Luisa Fda Ramírez C</Link>
        </div>
        <button onClick={toggleMenu} className="outline-none border-0 cursor-pointer bg-second-color">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`fill-first-color ${menuOpen ? 'hidden' : 'block'}`}>
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`fill-first-color ${menuOpen ? 'block' : 'hidden'}`}>
            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
          </svg>
        </button>
        <nav className={`fixed left-0 bottom-16 w-full transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-second-color`}>
          <Link href="/home" className="block py-4 text-first-color text-center font-bold hover:bg-first-color hover:text-white">Inicio</Link>
          <Link href="/about" className="block py-4 text-first-color text-center font-bold hover:bg-first-color hover:text-white">Acerca</Link>
          <Link href="/services" className="block py-4 text-first-color text-center font-bold hover:bg-first-color hover:text-white">Servicios</Link>
          <Link href="/portfolio" className="block py-4 text-first-color text-center font-bold hover:bg-first-color hover:text-white">Portafolio</Link>
          <Link href="/contact" className="block py-4 text-first-color text-center font-bold hover:bg-first-color hover:text-white">Contacto</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
