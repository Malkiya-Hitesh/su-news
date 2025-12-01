import React from 'react'
import NewsCategery from '../components/news/NewsCategery'
import Offers from '../components/Offers'

function page() {
    let city = [
        "chotila",
        "chuda",
        "dasada",
        "dhrangadhra",
        "halvad",
        "lakhtar",
        "limbdi",
        "muli",
        "sayla",
        "thangadh",
        "wadhwan"
    ]
    return (
        <section className="min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem]   ">
            {city.map((item, index) => {
                return (
                    <div key={index}>
                        <NewsCategery
                            type={item}
                            item={8}
                            cType={"taluko"}
                            link={"city"}
                        />

                        {/* Show Offers after every 2 city items */}
                        {(index + 1) % 2 === 0 && <Offers />}
                    </div>
                )
            })}
        </section>
    )
}

export default page
