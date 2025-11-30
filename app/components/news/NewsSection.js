import Image from "next/image";
import NewsCard from "./NewsCard";
import { getNews } from "@/app/lib/getNews";
import Loading from "@/app/loading";
import Nonews from "../Nonews";
import formatDate from "@/app/lib/formetDate";

async function NewsSection({ item, url }) {
  let newsData = undefined;
  let formatted = "";

  try {
    let data = await getNews(url);
    newsData = data.data;

    // 👉 CHECK IF DATA EXISTS
    if (Array.isArray(newsData) && newsData.length > 0) {
       
            const tampDate = formatDate(newsData[0].date);
            formatted = tampDate;
   

     
       
    }
  } catch (err) {
    console.error("Error fetching news:", err);
  }

  // SHOW LOADING
  if (!newsData) {
    return <Loading />;
  }

  // SHOW NO NEWS
  if (!Array.isArray(newsData) || newsData.length === 0) {
    return <Nonews />;
  }

  return (
    <section className="py-5 px-7  grid  gap-y-5 grid-cols-[1fr_0.8fr] gap-x-6 overflow-x-hidden bg-[var(--color-bg)]  flex-wrap">
      <div className="row-span-3 flex flex-col gap-4 py-3 px-4 border-2  border-[var(--color-border)] bg-[var(--color-bg-light)] hover:bg-[var(--color-border)] rounded-[10px]">

        <Image
          src={'/image/of1.jpg'}
          width={1000}
          height={1000}
          className="w-full h-[20rem] object-contain rounded-[10px] row-span-2"
          alt="main-news"
        />

        <div className="flex flex-col gap-3 mt-3">
          <span className="text-[0.9rem] font-[400] text-[var(--color-accent)]">
            {formatted}
          </span>

          <h2 className="text-[1.5rem] font-bold line-clamp-2 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:underline cursor-pointer">
            {newsData[0].title}
          </h2>

          <p className="text-[1rem] font-normal line-clamp-3 text-[var(--color-secondary)]">
            {newsData[0].desc}
          </p>
        </div>
      </div>

      {newsData.slice(1, item).map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </section>
  );
}

export default NewsSection;
