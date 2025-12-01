"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "@/app/lib/getNews";
import Loading from "@/app/loading";
import Nonews from "../Nonews";
import formatDate from "@/app/lib/formetDate";

function NewsBox({ newsData }) {
  const leftRef = useRef(null);
  const [formatted, setFormatted] = useState('');
  const [newsDatas, setNewsDatas] = useState(null);
  const [leftHeight, setLeftHeight] = useState(0);
 

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.clientHeight);
    }

    // OPTIONAL: live update on resize
    const resizeObserver = new ResizeObserver(() => {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.clientHeight);
      }
    });

    if (leftRef.current) resizeObserver.observe(leftRef.current);

    return () => resizeObserver.disconnect();
  }, [newsData, newsDatas]);

  let getData = async () => {
    let url = `type=${newsData.type}`;
    let data = await getNews(url)


    setNewsDatas(data.data);

  }
  useEffect(() => {
    getData();
  }, [newsData.type]);

  useEffect(() => {
    if (newsData.date) {
      const tampDate = formatDate(newsData.date);
      setFormatted(tampDate);
    }
  }, [newsData.date]);

  if (!newsData) {
    return <Loading />
  }

  if (newsDatas === null) return <Loading />;

  if (!newsData || newsData.length === 0) {
    return <Nonews />;
  }
  return (
    <section className="grid min-[1024px]:grid-cols-[1fr_0.5fr] grid-cols-1 py-5 px-7 gap-6 items-start">
      {/* LEFT MAIN DIV */}
      <div
        ref={leftRef}
        className="flex flex-col gap-5 px-5 py-4 bg-[var(--color-bg-light)] border border-[var(--color-border)] rounded-[10px] overflow-y-scroll no-scrollbar"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-[33px] font-[600] text-[var(--color-text)]">
            {newsData.title}
          </h1>

          <div className="flex gap-1 flex-col">
            <span className="text-[16px] font-[350] text-[var(--color-text)] h">Published by : {newsData.author}</span>
            <time className="text-[16px] font-[350]  text-[var(--color-text)] ">{formatted}</time>
          </div>

          <p className="text-[20px] font-[450] text-[var(--color-text-light)]">
            {newsData.maindes}
          </p>
        </div>

        <div className="overflow-hidden rounded-[10px]">
          <Image
            src={newsData.img || '/image/news-thum2.png'}
            width={1000}
            height={800}
            className="w-[90%] h-[90%] object-cover rounded-[10px] mx-auto"
            alt="main-news"
          />
        </div>

        {/* FULL DETAIL BOX */}
        <div className="flex flex-col gap-7 mt-4 p-5 bg-[var(--color-bg-light)]  rounded-[10px]">
          {newsData.desc
            .split(/\r?\n\r?\n/) // paragraph split
            .map((para, i) => (
              <p key={i} className="indent-10">
                {para}
              </p>
            ))}


        </div>
      </div>

      {/* RIGHT SIDE DIV → SAME HEIGHT AS LEFT */}
      <div
        style={{ height: leftHeight }}
        className="flex flex-col gap-4 overflow-y-scroll no-scrollbar">
        {newsDatas.slice(1).map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default NewsBox;
