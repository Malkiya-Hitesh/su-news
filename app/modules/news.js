import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 50,
            maxlength: 200,
            trim: true,
            index: true,

        },
        maindes: {
            type: String,
            required: true,
            minlength: 100,
            maxlength: 400,
            trim: true,
        },
        desc: {
            type: String,
            required: true,
            minlength: 300,
            maxlength: 10000,
           
        },
        type: {
            type: String,
            enum: [
                "politics",
                "sports",
                "technology",
                'health',
                "education",
                "crime",
                "world",
                "weather",
                "local",
                "other",
            ],
            required: true,
            index: true,
        },
        taluko: {
            type: String,
            enum: [
                "chotila",
                "chuda",
                "dasada",
                "dhrangadhra",
                "halvad",
                "lakhtar",
                "limbdi",
                "muli",
                "sayla",
                "thangadh",
                "wadhwan"
            ],
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            minlength: 5,
            maxlength: 35,
            lowercase: true,
            trim: true,
            index: true,
        },
        author: {
            type: String,
            required: false,
            minlength: 4,
            maxlength: 25,
            trim: true,
            default: 'Admin',
        },
        tags: {
            type: [String],
            default: [],
        },
        keywords: {
            type: [String],
            default: [],
        },
        isBreaking: {
            type: Boolean,
            default: false,
        },
        location: {
            type: String,
            minlength: 5,
            maxlength: 50,
            trim: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        img: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt
    }
);


// Index for searching by title or tags
NewsSchema.index({ title: "text", tags: "text", keywords: "text" });

const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export default News;
