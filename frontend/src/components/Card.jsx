import React from 'react'

function Card() {
  return (
    <div className='w-60 h-80 border-2 border-green-500 '>
      <div>
        <img
          className='object-cover w-full h-full'
          src='https://placehold.co/600x400.png'
          alt=''
        />
        <div className='p-4 text-center'>
          <h2 className='text-xl font-bold'>Product Name</h2>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <p className='text-gray-400'>$99.99</p>
        </div>
      </div>
    </div>
  )
}

export default Card