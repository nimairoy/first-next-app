'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
    {
        id: 1,
        title: 'Dashboard Home',
        path: '/dashboard'
    },
    {
        id: 2,
        title: 'Add Products',
        path: '/dashboard/add-products'
    },
    {
        id: 3,
        title: 'Manage User',
        path: '/dashboard/manage-user'
    },
    {
        id: 4,
        title: 'Manage Booking',
        path: '/dashboard/manage-booking'
    },
    {
        id: 5,
        title: 'Home',
        path: '/'
    },

]

const Sidebar = () => {
    const router = usePathname()
    console.log(router)
    return (
        <aside className='bg-slate-100 p-5 h-screen'>
            <h1 className="text-2xl mt-4 text-semibold">Dashboard</h1>
            <ul className='list-none mt-6'>
                {
                    navLinks.map(({ id, title, path }) => {
                        const isActive = router == path;
                        return (
                            <li key={id} className='my-6 text-gray-900 hover:text-gray-400'>
                                <Link href={path} className={`${isActive ? 'bg-green-500 text-white rounded-md' : ''}  p-3`}>{title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    );
};

export default Sidebar;