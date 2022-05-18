import React from 'react'
import paypal from "../assets/paypal.png"

const PaypalUser = ({textuser ,textbutton}) => {
  return (
    <form>
    <div className="flex mt-8">
      <img src={paypal} alt="" className="w-20" />
      <div className="ml-2">
        <label
          htmlFor="user"
          className="text-gray-600 font-bold text-xl"
        >
          {textuser}
        </label>
        <input
          type="text"
          className="mt-6 border rounded-lg w-80 block"
          id="user"
        />
      </div>
    </div>
    <div className="flex justify-end">
      <button className="bg-green-400 px-4 py-2 text-white font-semibold rounded-lg">
        {textbutton}
      </button>
    </div>
  </form>
  )
}

export default PaypalUser