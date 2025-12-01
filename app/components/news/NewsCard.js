import formatDate from '@/app/lib/formetDate';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function NewsCard({item, index}) {

  if (!item) {
    return <div>Loading...</div>;
  }
  let formatted = '';
  try {
    if (item.date) {
      const tampDate = formatDate(item.date);
      formatted = tampDate;
    }  }catch (err) {
   return 'invalid date';
  }
  return (
    <div
          key={index}
          className="flex flex-row-reverse items-center justify-end gap-3  py-3 px-4 border-2  border-[var(--color-border)] bg-[var(--color-bg-light)] hover:bg-[var(--color-border)] rounded-[10px]"
        >
          <Image
            src={item.img || '/image/news-thum2.png'}
            width={1000}
            height={1000}
            alt="news thumbnail"
            className="min-[1024px]:w-30 min-[1024px]:h-25 w-40 h-35 max-[640px]:w-30 max-[640px]:h-25 object-contain rounded-lg"
          />

          <div className="flex flex-col gap-3 mt-3">
            <span className="text-sm font-medium text-[var(--color-accent)] ">
              {item.type} • {formatted}
            </span>
<Link href={`/${item.slug}`}>
            <h2 className="text-lg font-semibold text-[var(--color-text)] leading-snug line-clamp-2 hover:text-[var(--color-primary)] hover:underline cursor-pointer">
              {item.title}
            </h2>
</Link>

            <p className="text-[1rem] font-normal text-[var(--color-secondary)] line-clamp-2">
              {item.desc}
            </p>
          </div>
        </div>
  )
}

export default NewsCard
