import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-[50%]' src={logo} alt="" />
            <p className='text-sm md:text-md'>Journalism Without Fear or Favour</p>
            <p className='text-sm md:text-md'>Sunday, November 27, 2025</p>
        </div>
    );
};

export default Header;