import React from 'react'
import H1 from '../H1'
import NewsSection from './NewsSection'
import Link from 'next/link'
import Button from '../ui/Button'

function LatestNews({ item }) {
  return (
    <>
      <section className="py-10 flex flex-col justify-end items-center gap-7">
        <H1 data={'latest '} />
        <NewsSection item={item} url={'latest=true'} />
        <div>
          <Link href={`/latest`}>
            <Button theme="dark">Load More</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default LatestNews
