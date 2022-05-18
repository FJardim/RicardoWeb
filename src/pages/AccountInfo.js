import React from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import profile from "../assets/profile.png";
import paypal from "../assets/paypal.png";
const AccountInfo = () => {
  return (
    <div className="p-8">
      <CardWithTitle title="My personal Information">
        <form>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-4">
              <img src={profile} alt="" className="w-20" />
              <label
                htmlFor="inputfile"
                className="bg-green-500	text-white font-semibold px-6 py-2 rounded-lg cursor-pointer"
              >
                Añadir Imagen
              </label>
              <input type="file" className="hidden" id="inputfile" />
            </div>
            <div>
              <label
                className="block text-gray-600 font-bold text-xl"
                htmlFor="text"
              >
                Name
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
                Phone
              </label>
              <input
                type="number"
                className="border mt-6 rounded-lg w-80"
                id="number"
              />
            </div>
            <div>
              <label htmlFor="user" className="text-gray-600 font-bold text-xl">
                Instagram User
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
              Change
            </button>
          </div>
        </form>
      </CardWithTitle>
      <div className="mt-6">
        <CardWithTitle title="My Paypal User">
          <form>
            <div className="flex mt-8">
              <img src={paypal} alt="" className="w-20" />
              <div className="ml-2">
                <label
                  htmlFor="user"
                  className="text-gray-600 font-bold text-xl"
                >
                  User
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
                Change
              </button>
            </div>
          </form>
        </CardWithTitle>
      </div>
      <div className="mt-6">
        <CardWithTitle title="My Password">
          <form>
            <div className="flex space-x-8 mb-32 mt-6 justify-center">
              <div className="ml-2">
                <label
                  htmlFor="user"
                  className="text-gray-600 font-bold text-xl"
                >
                  Write Actual Password
                </label>
                <input
                  type="text"
                  className="mt-6 border rounded-lg w-80 block"
                  id="user"
                />
              </div>
              <div className="ml-2">
                <label
                  htmlFor="user"
                  className="text-gray-600 font-bold text-xl"
                >
                  Write New Password
                </label>
                <input
                  type="text"
                  className="mt-6 border rounded-lg w-80 block"
                  id="user"
                />
              </div>
              <div className="ml-2">
                <label
                  htmlFor="user"
                  className="text-gray-600 font-bold text-xl"
                >
                  Confirm New Password
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
                Change
              </button>
            </div>
          </form>
        </CardWithTitle>
      </div>

      {/*  <UserProfile
        title="My personal Information"
        fieldname="Nombre:"
        fieldnumber="Phone:"
        fielduser="Instagram User:"
      />
      <ConfigInformation title="My Paypal User" fielduser="User:" />
      <ConfigInformation title="My Passwords" fielduser="Write Actual Password:" /> */}
    </div>
  );
};

export default AccountInfo;
