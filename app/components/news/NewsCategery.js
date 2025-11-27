import React from 'react'
import NewsSection from './NewsSection'
import Button from '../ui/Button'

function NewsCategery({type}) {
  return (
    <section className="py-10 flex flex-col justify-end items-center gap-7">

      {/* Heading */}
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {type} News
        </h1>


      </div>


      <NewsSection type={type}  />

      <div>
        <Button theme="dark">Load More</Button>
      </div>

    </section>
  )
}

export default NewsCategery
