import City from "./components/City";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://su-news.vercel.app"),
  title: {
    default: "SurendranagarNews – Surendranagar Local News, Updates & Breaking Stories",
    template: "%s | SurendranagarNews",
  },
  description:
    "Surendranagar local news platform. Get latest breaking news, daily updates, crime news, job news, government schemes & important headlines.",
  keywords: [
    "Surendranagar news",
    "Gujarat news",
    "Surendranagar latest updates",
    "Chotila news",
    "Gujarat breaking news",
    "Local news Surendranagar",
  ],
  authors: [{ name: "Malkiya Hitesh" }],

  openGraph: {
    title: "SurendranagarNews – Surendranagar Local News",
    description:
      "Daily local updates, breaking news & important stories from Surendranagar.",
    url: "https://su-news.vercel.app",
    siteName: "SurendranagarNews",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Surendranagar News Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
  <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <Navbar />
        <City />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
