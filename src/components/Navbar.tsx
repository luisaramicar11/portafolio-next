import React from 'react';
import NavItemLink from "./NavItemLink";

interface NavbarProps {
    isOpen: boolean;
    onClose: () => void; // Función para cerrar el menú
}

const navItems = [
    {
        title: 'HOME',
        path: '#home'
    },
    {
        title: 'ABOUT',
        path: '#about'
    },
    {
        title: 'SERVICES',
        path: '#services'
    },
    {
        title: 'PROJECTS',
        path: '#projects'
    },
    {
        title: 'CONTACT',
        path: '#contact'
    }
];

const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
    return (
        <nav className={`w-full md:block ${isOpen ? 'block' : 'hidden'} md:w-auto`} id="navbar-default">
            <ul className="text-md font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                {
                    navItems.map((navItem, index) => (
                        <li key={index}>
                            <NavItemLink path={navItem.path} title={navItem.title} onClick={onClose} /> {/* Pasa onClose aquí */}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;
