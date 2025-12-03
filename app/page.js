import City from "./components/City";
import LatestNews from "./components/news/LatestNews";
import NewsBreking from "./components/news/NewsBreking";
import NewsCategery from "./components/news/NewsCategery";
import Offers from "./components/Offers";

export const metadata = {
  title: "Surendranagar News – Latest Local News, Updates & Breaking Stories",
  description:
    "Get the latest Surendranagar local news, Chotila updates, breaking stories, politics, sports, crime news, job updates & important headlines. Daily updated Surendranagar news platform.",
  keywords: [
    "Surendranagar news",
    "Surendranagar updates",
    "Chotila news",
    "Gujarat news",
    "Surendranagar breaking news",
    "local news Surendranagar",
    "Gujarat today news",
    "Surendranagar crime news",
    "Surendranagar job news",
  ],
  alternates: {
    canonical: "https://su-news.vercel.app/",
  },
  openGraph: {
    title: "Surendranagar News – Latest Local News & Updates",
    description:
      "Daily updated Surendranagar news: Breaking news, politics, sports, jobs, Chotila taluka updates and more.",
    url: "https://su-news.vercel.app/",
    siteName: "SurendranagarNews",
    type: "website",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Surendranagar News",
      },
    ],
  },
};

export default function Home() {

  return (
    <main className=" ">
      {/* <City /> */}
      <LatestNews item={8} />
      <NewsBreking item={8} />
      <Offers />
      <NewsCategery type={'chotila'} item={8} cType={'taluko'} link={'city'} />
      <Offers />
      <NewsCategery type="sports" item={8} cType={'type'} link={'category'} />
      <Offers />
      <NewsCategery type="politics" item={8} cType={'type'} link={'category'} />
      <Offers />


    </main>
  );
}
