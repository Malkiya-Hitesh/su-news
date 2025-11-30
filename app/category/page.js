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
        <>{category.map((item, index) => (
            <NewsCategery key={index} type={item} item={8} cType={'type'} link={'category'} />
        ))}

        </>
    )
}

export default page
