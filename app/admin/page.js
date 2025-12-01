'use client'

import React, { useRef, useState } from 'react';
import { newsCreat } from '../actions/form';
import { validateNews } from '../lib/validateNews';

export default function NewsForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {



    e.preventDefault();




    setLoading(true);


    try {
      const formData = new FormData(formRef.current);

      if (!formData.get("isBreaking")) {
        formData.set("isBreaking", "false");
      }
const temperr = validateNews(formData);
      if (Object.keys(temperr).length > 0) {
        
        
        setErrors(temperr);
        setLoading(false);
 
      }
      
      const res = await newsCreat(formData);


      if (res.success) {
        alert('News created successfully!');
        
     
      } else {
       
      }
    } catch (err) {
   
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className=" min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem]  max-w-3xl mx-auto p-8 bg-white shadow-md rounded space-y-4">
      <h2 className="text-2xl font-bold mb-6">Add News</h2>

      <Input label="Title" type="text" name="title" placeholder="News title" errors={errors} />
      <Textarea label="Main Description" type="text" name="maindes" placeholder="Short main description" errors={errors} />
      <Textarea label="Description" type="text" name="desc" placeholder="Full news content" errors={errors}  />
      <Select label="Type" name="type" errors={errors} options={[
                "politics",
                "sports",
                "technology",
                "business",
                "education",
                "crime",
                "world",
                "weather",
                "local",
                "other",
            ]} />
      <Select label="Taluko" errors={errors} name="taluko" options={[
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
            ]} />
      <Input label="Author" type="text" name="author" placeholder="Author name" errors={errors} />
      <Input label="Tags (comma separated)" type="text" name="tags" placeholder="tag1, tag2" errors={errors} />
      <Input label="Keywords (comma separated)" type="text" name="keywords" placeholder="keyword1, keyword2" errors={errors} />
      <Checkbox label="Breaking News" name="isBreaking"  />
      <Input label="Location" type="text" name="location" placeholder="Location" errors={errors} />
<InputFile label="Upload Image" name="image" errors={errors} />

      <button
        type="submit"
        className={`px-6 py-2 font-bold rounded text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
      
      >
     newsCreat
      </button>

      
    </form>
  );
}

// Reusable components



function InputFile({ label, name, errors }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>{label}</label>
      <input
        type="file"
        id={name}
        name={name}
        accept="image/*"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-red-500 text-sm mt-1">{errors[name] ? errors[name] : ''}</p>
    </div>
  );
}



function Input({ label, name, placeholder, type, errors }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <p className="text-red-500 text-sm mt-1">{errors[name] ? errors[name] : ''}</p>
    </div>
  );
}

function Textarea({ label, name, placeholder, errors }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>{label}</label>
      <textarea id={name} name={name} placeholder={placeholder} required rows={5} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
         <p className="text-red-500 text-sm mt-1">{errors[name] ? errors[name] : ''}</p>
    </div>
  );
}

function Select({ label, name, options, errors }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>{label}</label>
      <select id={name} name={name} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
         <p className="text-red-500 text-sm mt-1">{errors[name] ? errors[name] : ''}</p>
    </div>
  );
}

function Checkbox({ label, name }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <input type="checkbox" id={name} name={name} className="h-4 w-4" />
      <label htmlFor={name} className="text-gray-700 font-semibold">{label}</label>
    </div>
  );
}
