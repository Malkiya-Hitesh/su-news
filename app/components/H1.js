import React from 'react'

function H1({ data }) {
  return (
   <div>
        <h1 className="text-3xl py-4 md:text-4xl text-center font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {data} News
        </h1>
      </div>
  )
}

export default H1
