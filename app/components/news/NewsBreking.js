import React from 'react'
import H1 from '../H1'
import Link from 'next/link'
import Button from '../ui/Button'
import NewsSection from './NewsSection'

function NewsBreking({item}) {
    let url = `breking=true`;
  return (
    <section className="py-10 flex flex-col justify-end items-center gap-7">
      <H1 data={'breking'} />
    <NewsSection  item={item} url={url}   />
      <div>
        <Link href={`/breking-news`}>
          <Button theme="dark">Load More</Button>
        </Link>
      </div>
    </section>
  )
}

export default NewsBreking
