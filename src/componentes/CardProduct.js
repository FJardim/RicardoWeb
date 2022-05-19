import React from 'react'
import lasagna from '../assets/pasticho.png'
const CardProduct = ({title,food}) => {
  return (
    <div>
      <p className='text-main ml-2'>{title}</p>
    <div className='flex mt-2 mb-10'>
        <img src={lasagna} alt="" className='rounded-lg shadow' />
        <p className='mt-12  ml-6'>{food}</p>
    </div>
    </div>
  )
}

export default CardProduct