import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between item-center px-12 bg-blue-900 text-white'>
            <h2>yoyo</h2>

            <ul className='flex items-center'>
                <li>home</li>
                <li>shop</li>
                <li>log-out</li>
            </ul>
        </nav>
    );
};

export default Navbar;