"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";

function NewsBox() {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  const newsData = [
        {
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },
{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },{
            type: "Sport",
            date: "05 December 2025",
            day: "Monday",
            title:
                "GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City",
            desc: "Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.",
        },
        {
            type: "Business",
            date: "14/02/2025",
            day: "Wednesday",
            title:
                "Investor Interest in Gujarat Startups Surges in 2025 as Multiple Sectors Report Expansion and Strong Market Momentum",
            desc: "A notable increase in investor participation has boosted early‑stage and growth‑stage startups, supporting technological advancement and creating new opportunities for business development in the region.",
        },
        {
            type: "Sport",
            date: "12/02/2025",
            day: "Monday",
            title:
                "Stage 4 Restrictions Adjusted Again as Delhi’s Air Quality Drops Sharply and Residents Face Increasing Health Concerns",
            desc: "Officials issued fresh warnings after pollution levels rose sharply, advising people to reduce outdoor travel and suggesting that the city may see further restrictions in the coming days.",
        },
        {
            type: "Politics",
            date: "10/02/2025",
            day: "Monday",
            title:
                "Government Approves Large-Scale Highway Development Plan to Improve Rural Connectivity and Support Regional Economic Growth",
            desc: "The newly approved highway project focuses on expanding transport networks in rural areas, aiming to boost trade, improve accessibility, and strengthen long-term economic development across districts.",
        },
        {
            type: "Sports",
            date: "12/02/2025",
            day: "Tuesday",
            title:
                "India Secures T20 Series Victory After an Intense Last-Over Chase That Thrilled Fans and Strengthened Team Momentum",
            desc: "Team India delivered a spectacular performance during the final over, successfully chasing a challenging target and winning the series, boosting confidence ahead of upcoming international matches.",
        },
        {
            type: "Weather",
            date: "11/02/2025",
            day: "Sunday",
            title:
                "Heavy Rains Expected Across Gujarat for the Next Two Days as IMD Issues Warning for Multiple Districts",
            desc: "The meteorological department has predicted widespread rainfall along with thunderstorms, advising residents to take precautions, avoid unnecessary travel, and stay updated on changing weather alerts.",
        },

        {
            type: "Business",
            date: "14/02/2025",
            day: "Wednesday",
            title:
                "Investor Interest in Gujarat Startups Surges in 2025 as Multiple Sectors Report Expansion and Strong Market Momentum",
            desc: "A notable increase in investor participation has boosted early‑stage and growth‑stage startups, supporting technological advancement and creating new opportunities for business development in the region.",
        },

        {
            type: "Crime",
            date: "09/02/2025",
            day: "Saturday",
            title:
                "Police Crack Major Robbery Case Within Hours After Identifying Suspects Through High-Quality CCTV Footage in the Area",
            desc: "Authorities arrested three individuals involved in a high-value robbery after analyzing CCTV footage that provided clear evidence, helping officers trace the suspects quickly and recover stolen items.",
        }
    ];

  // ✅ Calculate left div height
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
  }, []);

  return (
    <section className="grid grid-cols-[1fr_0.5fr] py-5 px-7 gap-6 items-start">
      {/* LEFT MAIN DIV */}
      <div
        ref={leftRef}
        className="flex flex-col gap-5 px-5 py-4 bg-[var(--color-bg-light)] border border-[var(--color-border)] rounded-[10px] overflow-y-scroll no-scrollbar"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-[33px] font-[600] text-[var(--color-text)]">
            GRAP Rejig: Stage 4 Restrictions Shifted to Stage 3 as Delhi Pollution Continues to Deteriorate Rapidly Across the City
          </h1>

          <div className="flex gap-1 flex-col">
            <span className="text-[16px] font-[350] text-[var(--color-text)] h">Published by : malkiya hitesh</span>
            <time className="text-[16px] font-[350]  text-[var(--color-text)] ">05 December 2025</time>
          </div>

          <p className="text-[20px] font-[450] text-[var(--color-text-light)]">
            Delhi's air quality worsened further as authorities moved Stage 4 restrictions back to Stage 3, urging citizens to limit outdoor activity and follow safety guidelines to avoid health risks.
          </p>
        </div>

        <div className="overflow-hidden rounded-[10px]">
          <Image
            src="/image/news-thum.png"
            width={1000}
            height={800}
            className="w-[90%] h-[90%] object-cover rounded-[10px] mx-auto"
            alt="main-news"
          />
        </div>

        {/* FULL DETAIL BOX */}
        <div className="flex flex-col gap-7 mt-4 p-5 bg-[var(--color-bg-light)]  rounded-[10px]">
          <p className="text-[18px] leading-[1.6] tracking-[0.5px] text-[var(--color-text)] indent-10 ">
            Delhi continues to face severe airsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrial pollution as the government adjusts restrictions from Stage 4 back to Stage 3 under the GRAP system.
          </p>

          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Citizens are advised to reducesuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrial unnecessary travel, avoid outdoor exercise, and wear protective masks when stepping outside.
          </p>

          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Authorities are tracking pollution sources such as construction, traffic movement, and industrial emissions.
          </p>
          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Delhi continues to face severe air pollution as the government adjusts restrictions from Stage 4 back to Stage 3 under the GRAP system.
          </p>

          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Citizens are advised to reduce unnecessary travel, avoid outdoor exercise, and wear protective masks when stepping outside.
          </p>

          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Authorities are tracking pollution such as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsources such as construction, traffic movement, and industrial emissions.
          </p>
          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Delhi continues to face severe airsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrial pollution as the government adjusts restrictions from Stage 4 back to Stage 3 under the GRAP system.
          </p>

          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Citizens are advised to reduce usuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialnnecessary travel, avoid outdoor exercise, and wear protective masks when stepping outside.
          </p>

          <p className="text-[18px] leading-[1.6] tracking-[0.5px] indent-10 text-[var(--color-text)]">
            Authorities are tracking pollution sources such as construction, traffic movement, and industrial such as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialsuch as construction, traffic movement, and industrialemissions.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE DIV → SAME HEIGHT AS LEFT */}
      <div
        style={{ height: leftHeight }}
        className="flex flex-col gap-4 overflow-y-scroll no-scrollbar"
      >
        {newsData.slice(1).map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default NewsBox;
