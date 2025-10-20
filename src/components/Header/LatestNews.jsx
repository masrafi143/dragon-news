import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex w-11/12 mx-auto bg-base-300 p-3 my-3'>
            <p className='bg-secondary px-5 py-3 text-white font-bold'>Latest</p>
            <Marquee className='' pauseOnHover={true} speed={60}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;