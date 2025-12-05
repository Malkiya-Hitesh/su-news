import mongoose from "mongoose"
const ContactShema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})
    const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactShema);
    export default Contact;