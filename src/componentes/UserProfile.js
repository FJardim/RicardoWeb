import React from 'react'
import paypal from '../assets/paypal.png'
const UserProfile = ({title, textuser}) => {
  return (
    <div className='bg-white mt-10 rounded-lg p-3 align-center'>
        <div>
            <p className='font-bold text-lg'>{title}</p>
        </div>
        <div className='flex'>
          
          <img src={paypal} alt=""  className='w-20 h-20'/>
          <div>
          <p>{textuser}</p>
          </div>
          <label>
            <input type="text" className=" rounded-lg " />
          </label>
        </div>

    </div>
  )
}

export default UserProfile