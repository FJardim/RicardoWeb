import React from 'react'
import { TiContacts } from "react-icons/ti"

const InformationChef = ({ seller }) => {
  return (
    <div className='p-2'>
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <TiContacts className="text-main" />
        <span>Information</span>
      </button>
      <div className="mt-6 space-y-2">
        <p>Phone: {seller?.phoneNumber}</p>
        <p>Instagram: {seller?.instagram}</p>
        <p>Facebook: {seller?.facebook}</p>
        <p>Whatsapp: {seller?.whatsapp}</p>
      </div>
    </div>
  )
}

export default InformationChef