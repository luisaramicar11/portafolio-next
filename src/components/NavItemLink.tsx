"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
    path: string;
    title: string;
}

const NavItemLink = ({ path, title }: IProps) => {
    const currentPath = usePathname();
    return (
        <Link href={path} className={`text-md block py-4 text-black text-center font-bold  ${currentPath === path ? " text-first-color" : ""}`}>{title}</Link>
    )
}

export default NavItemLink
