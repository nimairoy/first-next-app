'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "about",
        path: "/about",
    },
    {
        id: 3,
        name: "blogs",
        path: "/blogs",
    },
    {
        id: 4,
        name: "contact",
        path: "/contact",
    },
    {
        id: 5,
        name: "dashboard",
        path: "/dashboard",
    },
]

const Navbar = () => {

    const pathname = usePathname();

    return (
        <div className='py-6 bg-slate-100'>
            <nav className='max-w-4xl mx-auto'>
                <ul className='flex items-center justify-center space-x-6'>
                    {
                        navLinks.map(({ name, path, id }) => {
                            const isActive = pathname == path;
                            return (<Link
                                href={path}
                                key={id}
                                className={`rounded-md p-2 capitalize ${isActive ? 'bg-green-300 text-white' : ""} hover:text-gray-600 hover:bg-green-300`}
                            >
                                {name}
                            </Link>)
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;