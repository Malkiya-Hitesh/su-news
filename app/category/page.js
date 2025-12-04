import React from 'react'
import NewsCategery from '../components/news/NewsCategery'

function page() {
    let category = [
                "politics",
                "sports",
                "technology",
                'health',
                "education",
                "crime",
                "world",
                "weather",
                "local",
                "other",
            ]


    return (
        <section className="">
        {category.map((item, index) => (
            <NewsCategery key={index} type={item} item={8} cType={'type'} link={'category'} />
        ))}

        </section>
    )
}

export default page
