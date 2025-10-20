import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(data);
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(data);
            return;
        } else if(id == '1'){
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        } else{            
            const filteredNews = data.filter(news => news.category_id == id);
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }
    }, [data, id])
    console.log(id)
    return (
        <div>
            <h2 className='font-bold'>Total <span className='text-secondary'>{categoryNews.length}</span> news Found</h2>
            <div className='grid grid-cols-1 gap-5 mt-5'>
            {
                categoryNews.map(news => (
                    <NewsCard news={news}/>
                ))
            }
            </div>
        </div>
    );
};

export default CategoryNews;