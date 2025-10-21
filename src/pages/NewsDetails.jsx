import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/layouts/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails);
    } , [data, id]);
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold text-2xl'>News Details</h2>
                    <NewsDetailsCard news={news}/>
                </section>
                <aside className='col-span-3 sticky top-5 h-fit'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;