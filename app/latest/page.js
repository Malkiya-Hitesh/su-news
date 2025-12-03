import React from 'react'
import H1 from '../components/H1'
import NewsSection from '../components/news/NewsSection'

function page() {
  return (
    <section className="min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem]   ">
    <H1 data={'latest'} />
           <NewsSection  item={100} url={`limit=8`}   />
    </section>
  )
}

export default page
