'use server'

import connectDB from "../lib/mongoos";
import News from "../modules/news";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const newsCreat = async (formData) => {

    try {

        const title = formData.get("title")?.trim();
        const maindes = formData.get("maindes")?.trim();
        const desc = formData.get("desc")?.trim();
        const type = formData.get("type")?.trim();
        const taluko = formData.get("taluko")?.trim();
        const author = formData.get("author")?.trim();
        const tags = formData.get("tags")?.trim();
        const keywords = formData.get("keywords")?.trim();
        const isBreaking = formData.get("isBreaking") === "true" || formData.get("isBreaking") === "on";
        const location = formData.get("location")?.trim();
        const url = formData.get("url")?.trim();
        const imgFile = formData.get("image"); // get the uploaded file


        let imgUrl;
        if (imgFile && imgFile.size > 0) {
            const buffer = Buffer.from(await imgFile.arrayBuffer());
            const result = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "news_site/news" }, // Cloudinary folder
                    (err, res) => {
                        if (err) reject(err);
                        else resolve(res);
                    }
                );
                stream.end(buffer);
            });
            imgUrl = result.secure_url; // store the uploaded image URL
        }
     

        const tagsArray = tags ? tags.split(",").map((t) => t.trim()) : [];
        const keywordsArray = keywords ? keywords.split(",").map((k) => k.trim()) : [];


        await connectDB();

        const news = await News.create({
            title,
            maindes,
            desc,
            type,
            taluko,
            slug: url,
            author,
            tags: tagsArray,
            keywords: keywordsArray,
            isBreaking,
            location,
            img: imgUrl,
        });



        return { success: true, status: 201, message: "News created successfully" };

    } catch (err) {
        console.log("ERR =>", err);


        let fieldErrors = {};

        if (err.name === "ValidationError") {
            fieldErrors = Object.fromEntries(
                Object.entries(err.errors).map(([field, e]) => [
                    field,
                    e.message
                ])
            );
        }

        return {
            success: false,
            status: 400,
            message: "Validation Error",
            errors: fieldErrors
        };
    }
};
