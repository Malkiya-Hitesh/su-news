'use server'

import connectDB from "../lib/mongoos";
import Contact from "../modules/contact";

export const contactForm = async (formData)=>{
    try{
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        await connectDB ()

        const contactFormData = await Contact.create({
            name,
            email,
            message,
        });

            return { success: true, status: 201, message: "messgae sent successfully" };



    }catch(err){
        console.log(err);
        return { success: false, status: 500, message: "messgae not sent" };

    }

}