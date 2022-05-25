import React from 'react'
import ButtonChange from './ButtonChange'

const PasswordUser = ({ title, text, spam }) => {
  return (
    <form>
      <div className="md:flex space-x-8 mb-32 mt-6 justify-center">
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold text-xl"
          >
            {title}
          </label>
          <input
            type="password"
            className="mt-6 border rounded-lg md:w-80 block"
            id="user"
            placeholder='Password'
          />
        </div>
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold text-xl"
          >
            {text}
          </label>
          <input
            type="password"
            className="mt-6 border rounded-lg md:w-80 block"
            id="user"
            placeholder='Password'
          />
        </div>
        <div className="ml-2">
          <label
            htmlFor="user"
            className="text-gray-600 font-bold text-xl"
          >
            {spam}
          </label>
          <input
            type="password"
            className="mt-6 border rounded-lg md:w-80 block"
            id="user"
            placeholder='Password'
          />
        </div>
      </div>
      <div className="md:flex justify-end">
        <ButtonChange />
      </div>
    </form>
  )
}

export default PasswordUser