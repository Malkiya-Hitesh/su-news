export const getNews = async (url) => {
    let urll=  encodeURI(url);
    try {
     
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news?${urll}`, {
            cache: "no-store", // or "force-cache"
        });

        const data = await res.json();


        return { success: true, status: 200, data };
    } catch (err) {
      

        return { success: false };
    }
};
