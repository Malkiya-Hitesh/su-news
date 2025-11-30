import React from 'react'
import NewsSection from '../../components/news/NewsSection'
import Offers from '@/app/components/Offers';
import H1 from '@/app/components/H1';

 async function page({ params }) {
  let { slug} = await params;
  return (
   <>
   
   <H1 data={slug} />
   <NewsSection  item={100} url={`category=${slug}`}   />
   <Offers />
   </>
  )
}

export default page
