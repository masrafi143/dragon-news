import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import LatestNews from '../Header/LatestNews';
import Navbar from '../Header/Navbar';

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
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;