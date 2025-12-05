'use client'
import React, { useRef, useState } from 'react'
import { contactForm } from '../actions/contact';

export default function Page() {

  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending... ⏳");

    const formData = new FormData(formRef.current);

    try {
     let res =  await contactForm(formData);

if(res.success== true){
    setStatus("Message sent successfully! ✅");
      formRef.current.reset();
  return
}
if(res.success == false){
    setStatus("Something went wrong ❌");
  return
}

     
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section className="mt-10 max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">📩 Contact Us</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

        <InputComp data="name" types="text" />
        <InputComp data="email" types="email" />

        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
            rows={5}
            className="border rounded-lg p-3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message 🚀
        </button>

        {status && (
          <p className="text-center mt-3 font-semibold">{status}</p>
        )}

      </form>
    </section>
  );
}

export const InputComp = ({ data, types }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={data} className="font-semibold capitalize">{data}</label>
      <input
        type={types}
        id={data}
        name={data}
        required
        placeholder={`Your ${data}`}
        className="border rounded-lg p-3"
      />
    </div>
  );
};
