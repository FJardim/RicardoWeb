import React from 'react'
import profile from "../assets/profile.png"
import ButtonChange from "../componentes/ButtonChange";


const FormAccount = ({ sourseimg, textname, textphone, textaccount, textbutton }) => {
  return (
    <form>
      <div className="md:grid md:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center space-x-4">
          <img src={profile} alt="" className="w-20" />
          <label
            htmlFor="inputfile"
            className="bg-main md:flex justify-center items-center hover:bg-main-light text-white text-center font-light md:px-3 md:py-2 rounded-lg cursor-pointer"
          >
            {sourseimg}
          </label>
          <input type="file" className="hidden" id="inputfile"/>
        </div>
        <div>
          <label
            className="block text-gray-600 font-bold md:text-xl"
            htmlFor="text"
          >
            {textname}
          </label>
          <input
            type="text"
            className="mt-6  md:text-xl text-xs border rounded-lg w-32 md:w-80 block"
            id="text"
            placeholder='Jeyver Vegas'
          />
          
          
        </div>
        <div>
          <label
            className="block text-gray-600 font-bold md:text-xl"
            htmlFor="number"
          >
            {textphone}
          </label>
          <input
            type="number"
            className="mt-6 md:text-xl text-xs border rounded-lg w-32 md:w-80 block"
            id="number"
            placeholder='1123916734'
          />
        </div>
        <div>
          <label htmlFor="user" className="text-gray-600 font-bold md:text-xl">
            {textaccount}
          </label>
          <input
            type="text"
            className="mt-6 md:text-xl text-xs border rounded-lg w-32 md:w-80 block"
            id="user"
            placeholder='@RicadorIlGrande'
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-4">
        <ButtonChange />
      </div>
    </form>
  )
}

export default FormAccount