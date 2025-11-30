import React from 'react'
import NewsBox from '../components/news/NewsBox';
import { getNews } from '../lib/getNews';
import Nonews from '../components/Nonews';

async function page({ params }) {
let newsData = undefined;
  try {
    let {slug} = await params;
let url = `slug=${slug}`;
     let data = await getNews(url)
      newsData = data.data;
  }
  catch (error) {
    console.error("Error fetching news data:", error);
  }


  if (!newsData || newsData.length === 0) {
    return <Nonews />;
  }
  return (
            <div>
        <NewsBox newsData={newsData[0]} />
            </div>
  )
}

export default page
