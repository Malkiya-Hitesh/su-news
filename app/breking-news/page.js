
import H1 from '../components/H1'
import NewsSection from '../components/news/NewsSection'


export const metadata = {
  title: "Breaking News – Surendranagar Latest Urgent Updates",
  description:
    "Get fast, real-time breaking news from Surendranagar. Live updates on crime, accidents, politics, events, emergencies & major incidents happening now.",
  keywords: [
    "Surendranagar breaking news",
    "breaking news Surendranagar",
    "live news Surendranagar",
    "Surendranagar urgent updates",
    "latest Surendranagar news",
    "Gujarat breaking news",
  ],
  openGraph: {
    title: "Breaking News – Surendranagar Live Updates",
    description:
      "Instant breaking news updates from Surendranagar: Crime, accidents, emergencies, politics & live incidents.",
    url: "https://su-news.vercel.app/breking",
    type: "article",
    siteName: "SurendranagarNews",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Breaking News Surendranagar",
      },
    ],
  },
  alternates: {
    canonical: "https://su-news.vercel.app/breking",
  },
};
function page() {
  return (
    <section className="">
    <H1 data={'breking'} />
           <NewsSection  item={100} url={`breking=true`}   />
    </section> 
  )
}

export default page
