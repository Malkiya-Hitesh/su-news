import React from 'react'
import H1 from '../components/H1'
import NewsSection from '../components/news/NewsSection'

function page() {
  return (
    <>
    <H1 data={'latest'} />
           <NewsSection  item={100} url={`latest=true`}   />
    </>
  )
}

export default page
