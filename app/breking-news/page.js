
import H1 from '../components/H1'
import NewsSection from '../components/news/NewsSection'

function page() {
  return (
    <>
    <H1 data={'breking'} />
           <NewsSection  item={100} url={`breking=true`}   />
    </> 
  )
}

export default page
