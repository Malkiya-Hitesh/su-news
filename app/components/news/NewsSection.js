import Image from "next/image";
import React from "react";
import NewsCard from "./NewsCard";

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



function NewsSection({ type }) {
  return (
    <section className="py-5 px-7  grid  gap-y-5 grid-cols-2 gap-x-6 overflow-x-hidden bg-[var(--color-bg)] ">
      {/* BIG MAIN NEWS (first item) */}
      <div className="row-span-3 flex flex-col gap-4 py-3 px-4 border-2  border-[var(--color-border)] bg-[var(--color-bg-light)] hover:bg-[var(--color-border)] rounded-[10px]">
        <Image
          src="/image/news-thum.png"
          width={100000}
          height={1000000}
          className="w-full h-auto object-cover rounded-[10px]"
          alt="main-news"
        />

        <div className="flex flex-col gap-3 mt-3">
          <span className="text-[0.9rem] font-[400] text-[var(--color-accent)] ">
            {newsData[0].type} • {newsData[0].date} • {newsData[0].day}
          </span>

          <h2 className="text-[1.5rem] font-bold line-clamp-2 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:underline cursor-pointer">
            {newsData[0].title}
          </h2>

          <p className="text-[1rem] font-normal line-clamp-3 text-[var(--color-secondary)]">
            {newsData[0].desc}
          </p>
        </div>
      </div>

      {/* OTHER NEWS ITEMS */}
      {newsData.slice(1).map((item, index) => (
       <NewsCard key={index} item={item} />
      ))}
    </section>
  );
}

export default NewsSection;
