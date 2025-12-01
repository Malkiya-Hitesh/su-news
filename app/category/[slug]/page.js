import React from 'react'
import NewsSection from '../../components/news/NewsSection'
import Offers from '@/app/components/Offers';
import H1 from '@/app/components/H1';

 async function page({ params }) {
  let { slug} = await params;
  return (
   <section className="min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem]   ">
   
   <H1 data={slug} />
   <NewsSection  item={100} url={`category=${slug}`}   />
   <Offers />
   </section>
  )
}

export default page
