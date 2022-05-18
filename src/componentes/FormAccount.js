import React from 'react'
import profile from "../assets/profile.png"
const FormAccount = ({sourseimg,textname,textphone,textaccount,textbutton}) => {
  return (
    <form>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="flex items-center space-x-4">
        <img src={profile} alt="" className="w-20" />
        <label
          htmlFor="inputfile"
          className="bg-main	text-white font-semibold px-6 py-2 rounded-lg cursor-pointer"
        >
          {sourseimg}
        </label>
        <input type="file" className="hidden" id="inputfile" />
      </div>
      <div>
        <label
          className="block text-gray-600 font-bold text-xl"
          htmlFor="text"
        >
          {textname}
        </label>
        <input
          type="text"
          className=" border mt-6 rounded-lg w-80"
          id="text"
        />
      </div>
      <div>
        <label
          className="block text-gray-600 font-bold text-xl"
          htmlFor="number"
        >
          {textphone}
        </label>
        <input
          type="number"
          className="border mt-6 rounded-lg w-80"
          id="number"
        />
      </div>
      <div>
        <label htmlFor="user" className="text-gray-600 font-bold text-xl">
          {textaccount}
        </label>
        <input
          type="text"
          className="mt-6 border rounded-lg w-80 block"
          id="user"
        />
      </div>
    </div>
    <div className="flex justify-end">
      <button className="bg-main px-4 py-2 text-white font-semibold rounded-lg">
        {textbutton}
      </button>
    </div>
  </form>
  )
}

export default FormAccount