"use client"
import React, { useState } from 'react';
import NavItemLink from "./NavItemLink";
import Navbar from './Navbar';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false); // Cierra el menú
    };

    return (
        <header className="bg-white-color fixed left-0 top-0 z-50 w-full bg-transparent p-4 min-h-16">
            <section className="container mx-auto flex flex-wrap justify-between items-center">
                <NavItemLink path="/portfolio" title="LUISA RAMÍREZ" />
                <button 
                    onClick={toggleMenu} 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <Navbar isOpen={isOpen} onClose={closeMenu} /> {/* Pasa la función closeMenu */}
            </section>
        </header>
    );
};

export default Header;


