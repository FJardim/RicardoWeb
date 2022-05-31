import React from 'react'
import paypal from "../assets/paypal.png"

const PaypalUser = ({ textuser, textbutton }) => {
  return (
    <form>
      <div className="md:flex mt-8">
        <img src={paypal} alt="" className="w-20" />
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {textuser}
          </label>
          <input
            type="text"
            className="mt-6 border rounded-lg w-20 md:w-80 block"
            id="user"
            placeholder='User'
          />
        </div>
      </div>
      <div className="md:flex justify-end">
        <button className="bg-main hover:bg-main-light px-4 py-2 text-white font-semibold rounded-lg">
          {textbutton}
        </button>
      </div>
    </form>
  )
}

export default PaypalUser