import React from 'react'
import profile from "../assets/profile.png"
import ButtonChange from "../componentes/ButtonChange";

const FormAccount = ({ sourseimg, textname, textphone, textaccount, textbutton }) => {
  return (
    <form>
      <div className="md:grid md:grid-cols-2 gap-4 mt-6">
        <div className="md:flex items-center space-x-4">
          <img src={profile} alt="" className="md:w-20" />
          <label
            htmlFor="inputfile"
            className="md:bg-main md:hover:bg-main-light text-white font-semibold md:px-6 md:py-2 rounded-lg cursor-pointer"
          >
            {sourseimg}
          </label>
          <input type="file" className="md:hidden" id="inputfile" />
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
            className="mt-6 border rounded-lg w-20 md:w-80 block"
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
            className="mt-6 border rounded-lg w-20 md:w-80 block"
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
            className="mt-6 border rounded-lg w-20 md:w-80 block"
            id="user"
            placeholder='@RicadorIlGrande'
          />
        </div>
      </div>
      <div className="md:flex justify-end">
        <ButtonChange />
      </div>
    </form>
  )
}

export default FormAccount