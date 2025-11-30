import City from "./components/City";
import LatestNews from "./components/news/LatestNews";
import NewsBreking from "./components/news/NewsBreking";
import NewsCategery from "./components/news/NewsCategery";
import Offers from "./components/Offers";


export default function Home() {
  return (
    <main>
      <City />
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
