import H1 from '@/app/components/H1';
import NewsSection from '@/app/components/news/NewsSection';
import React from 'react'

async function page({ params }) {
  let { slug } = await params;
  return (
  <>
  <H1 data={slug} />
  <NewsSection  item={100} url={`taluko=${slug}`}   />
  </>
  )
}

export default page
