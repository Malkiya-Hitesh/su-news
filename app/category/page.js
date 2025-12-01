import React from 'react'
import NewsCategery from '../components/news/NewsCategery'

function page() {
    let category = [

        "politics",
        "sports",
        "technology",
        "business",
        "education",
        "crime",
        "world",
        "weather",
        "local",
    ]


    return (
        <section className="min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem]   ">
        {category.map((item, index) => (
            <NewsCategery key={index} type={item} item={8} cType={'type'} link={'category'} />
        ))}

        </section>
    )
}

export default page
