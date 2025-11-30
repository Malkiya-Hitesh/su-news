import React from 'react'
import NewsSection from './NewsSection'
import Button from '../ui/Button'
import Link from 'next/link'
import H1 from '../H1'

function NewsCategery({ type, item, link, cType }) {
  let url = `${cType}=${type}`;
  return (
    <section className="py-10 flex flex-col justify-end items-center gap-7">
      <H1 data={type} />
      <NewsSection  item={item} url={url}   />
      <div>
        <Link href={`/${link}/${type.toLowerCase()}`}>
          <Button theme="dark">Load More</Button>
        </Link>
      </div>
    </section>
  )
}

export default NewsCategery
