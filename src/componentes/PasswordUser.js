import React from 'react'
import ButtonChange from './ButtonChange'

const PasswordUser = ({ title, text, spam }) => {
  return (
    <form>
      <div className="md:flex ">
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {title}
          </label>
          <input
            type="password"
            className="mt-6 border rounded-lg w-20 md:w-80 block"
            id="user"
            placeholder='Password'
          />
        </div>
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {text}
          </label>
          <input
            type="password"
            className="mt-6 border rounded-lg w-20 md:w-80 block"
            id="user"
            placeholder='Password'
          />
        </div>
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold md:text-xl"
          >
            {spam}
          </label>
          <input
            type="password"
            className="mt-6 border rounded-lg w-20 md:w-80 block"
            id="user"
            placeholder='Password'
          />
        </div>
      </div>
      <div className="md:flex justify-end mt-4">
        <ButtonChange />
      </div>
    </form>
  )
}

export default PasswordUser