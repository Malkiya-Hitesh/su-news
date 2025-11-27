import NewsBox from "./components/news/NewsBox";
import NewsCategery from "./components/news/NewsCategery";
import Offers from "./components/Offers";
import OffersCard from "./components/OffersCard";

export default function Home() {
  return (
    <main>

      <NewsBox />
      <NewsCategery type="Latest" />
      <Offers />
    </main>
  );
}
