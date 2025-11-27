import Image from 'next/image'
import React from 'react'

function NewsCard({item, index}) {
  return (
    <div
          key={index}
          className="flex flex-row-reverse items-center justify-end gap-5  py-3 px-4 border-2  border-[var(--color-border)] bg-[var(--color-bg-light)] hover:bg-[var(--color-border)] rounded-[10px]"
        >
          <Image
            src="/image/news-thum2.png"
            width={1000}
            height={1000}
            alt="news thumbnail"
            className="w-30 h-20 object-cover rounded-lg"
          />

          <div className="flex flex-col gap-3 mt-3">
            <span className="text-sm font-medium text-[var(--color-accent)] ">
              {item.type} • {item.date} • {item.day}
            </span>

            <h2 className="text-lg font-semibold text-[var(--color-text)] leading-snug line-clamp-2 hover:text-[var(--color-primary)] hover:underline cursor-pointer">
              {item.title}
            </h2>

            <p className="text-[1rem] font-normal text-[var(--color-secondary)] line-clamp-2">
              {item.desc}
            </p>
          </div>
        </div>
  )
}

export default NewsCard
