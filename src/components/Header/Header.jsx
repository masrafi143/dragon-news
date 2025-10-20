import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-6'>
            <img className='w-[50%]' src={logo} alt="" />
            <p className='text-sm md:text-md text-accent'>Journalism Without Fear or Favour</p>
            <p  text-accent>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;