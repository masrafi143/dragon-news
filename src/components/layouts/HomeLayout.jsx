import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LatestNews from '../Header/LatestNews';
import Navbar from '../Header/Navbar';
import RightAside from './RightAside';
import LeftAside from './LeftAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <LatestNews/>
                <nav className=''>
                    <Navbar/>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3
                 grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <LeftAside/>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;