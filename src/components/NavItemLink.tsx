import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
    path: string;
    title: string;
    onClick?: () => void; // Prop opcional para manejar el clic
}

const NavItemLink: React.FC<IProps> = ({ path, title, onClick }) => {
    const currentPath = usePathname();

    const handleClick = () => {
        if (onClick) onClick(); // Ejecuta la función onClick si está definida
    };

    return (
        <Link 
            href={path} 
            className={`text-md block py-4 text-black text-center font-bold ${currentPath === path ? "text-first-color" : ""}`} 
            onClick={handleClick} // Agrega el manejador de clic
        >
            {title}
        </Link>
    );
}

export default NavItemLink;

