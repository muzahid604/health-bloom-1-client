import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <Link to='/' className='btn btn-primary mx-4'>Home</Link>
                <Link to='/' className='btn btn-primary mx-4'>Home</Link>
                <Link to='/' className='btn btn-primary mx-4'>Home</Link>
                <Link to='/' className='btn btn-primary mx-4'>Home</Link>

            </div>
        </div>
    );
};

export default Header;