import React from 'react'
import Chefs from '../assets/chef-hat.png'
const Details = ({level,categories,fitness,time,days,ingredients,number, price}) => {
  return (
    <div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">{level}</p>
                        <div className='flex '>
                            <img className="w-5 h-5" src={Chefs} alt="chefs" />
                            <img className="ml-2 w-5 h-5" src={Chefs} alt="chefs" />
                            <img className="ml-2 w-5 h-5" src={Chefs} alt="chefs" />
                            <img className="ml-2 w-5 h-5" src={Chefs} alt="chefs" />
                        </div>
                    </div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">{categories}</p>
                        <p className="w-1/2 ml-10 text-black">{fitness}</p>
                        <div className=''>
                        <p className='text-main font-semibold'>{price}</p>
                    </div>
                    </div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">{time}</p>
                        <p className="w-1/2 text-main underline">{days}</p>
                        
                    </div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">{ingredients}</p>
                        <p className="w-1/2 text-black">{number}</p>
                    
                       
                    </div>

                   

                </div>
  )
}

export default Details