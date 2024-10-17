import React from 'react';
import NavItemLink from "./NavItemLink"

const navItems = [
    {
        title: 'Inicio',
        path: '/'
    },
    {
        title: 'Acerca',
        path: '/about'
    },
    {
        title: 'Servicios',
        path: '/services'
    },
    {
        title: 'Portafolio',
        path: '/portfolio'
    },
    {
        title: 'Contacto',
        path: '/contact'
    }
]

const Navbar = () => {
    return (
        <nav className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {
                    navItems.map((navItem, index) => (
                        <li key={index} >
                            <NavItemLink path={navItem.path} title={navItem.title} />
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
