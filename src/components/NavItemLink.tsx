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
        <Link href={path} className={`block py-4 text-first-color text-center font-bold  ${currentPath === path ? " text-white" : ""}`}>{title}</Link>
    )
}

export default NavItemLink
