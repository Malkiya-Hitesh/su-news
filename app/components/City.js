import Link from 'next/link'
import React from 'react'

function City() {
 let city=    [
  "Chotila",
  "Chuda",
  "Dasada",
  "Dhrangadhra",
  "Halvad",
  "Lakhtar",
  "Limbdi",
  "Muli",
  "Sayla",
  "Thangadh",
  "Wadhwan"
]

    return (
        <div className='perent border   py-3 px-7 flex flex-row justify-start overflow-x-auto scrollbar-none scroll-smooth items-start gap-6 min-[1024px]:mt-[8rem] mt-[7.4rem] max-[640px]:mt-[5.5rem]' >
            {city.map((item , index)=>(
                <CitySpan key={index} data={item} />
            ))}



        </div>
    )
}

export default City



function CitySpan({ data }) {
    return (
        <Link href={`/city/${data.toLowerCase()}`}>
        <span
            className='text-[length:var(--text-lgg)] text-[var(--color-text)] border-blue-600 font-[400] tracking-[.12rem]   hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-transparent bg-clip-text  pb-1   cursor-pointer '
            style={{ fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            {data}
        </span>
        </Link>
    )
}