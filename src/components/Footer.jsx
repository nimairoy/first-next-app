import React from 'react';

const Footer = () => {
    return (
        <div className='text-center bg-slate-200 py-4'>
            <p>&copy; Copyright All Right Reserved {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;