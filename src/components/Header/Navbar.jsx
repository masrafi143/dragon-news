import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between w-11/12 mx-auto'>
            <div></div>
            <nav className='space-x-2 md:space-x-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </nav>
            <div className="login-btn flex items-center gap-2">
                <img className='w-[30px]' src={user} alt="" />
                <Link to={'/auth/login'} className="btn btn-primary md:px-10">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;