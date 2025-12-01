
import H1 from '../components/H1'
import NewsSection from '../components/news/NewsSection'

function page() {
  return (
    <section className="min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem]   ">
    <H1 data={'breking'} />
           <NewsSection  item={100} url={`breking=true`}   />
    </section> 
  )
}

export default page
