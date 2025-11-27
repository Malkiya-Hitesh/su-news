import React from 'react'

function City() {
    return (
        <div className='perent border   py-3 px-7 flex flex-row justify-start overflow-x-auto scrollbar-none scroll-smooth items-start gap-6 ' >
            <CitySpan data={"chotila"} />
            <CitySpan data={'saela'} />
            <CitySpan data={'muli'} />
            <CitySpan data={'limbadi'} />
            <CitySpan data={'surendranagar'} />
            <CitySpan data={'dhrangadhra'} />
            <CitySpan data={'rajkot'} />
            <CitySpan data={'morbi'} />
            <CitySpan data={'jamnagar'} />
            <CitySpan data={'junagadh'} />
            <CitySpan data={'porbandar'} />
            <CitySpan data={"chotila"} />
            <CitySpan data={'saela'} />
            <CitySpan data={'muli'} />
            <CitySpan data={'limbadi'} />
            <CitySpan data={'surendranagar'} />
            <CitySpan data={'dhrangadhra'} />
            <CitySpan data={'rajkot'} />
            <CitySpan data={'morbi'} />
            <CitySpan data={'jamnagar'} />
            <CitySpan data={'junagadh'} />
            <CitySpan data={'porbandar'} />



        </div>
    )
}

export default City



function CitySpan({ data }) {
    return (
        <span
            className='text-[length:var(--text-lgg)] text-[var(--color-text)] border-blue-600 font-[200] tracking-[.12rem]   hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-transparent bg-clip-text  pb-1   cursor-pointer '
            style={{ fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            {data}
        </span>
    )
}