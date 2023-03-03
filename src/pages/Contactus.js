import BannerPage from "../componentes/BannerPage";
import foodBg from "../assets/img1.jpg";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import {BsPersonFill} from "react-icons/bs";
import {ImSpinner9} from "react-icons/im";
import {IoLocationSharp, IoMail} from "react-icons/io5";

const defaultData = () => ({
  email: '',
  content: '',
})

const Contactus = () => {
  const [data, setData] = useState(defaultData());

  const [{ data: contactData, loading }, sendEmail] = useAxios({ url: '/email-contacts', method: 'POST' }, { manual: 'true' });

  const handleChange = (e) => {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await sendEmail({ data });

    setData(defaultData())
  }
  
  return (
    <div className="">
      <BannerPage image={foodBg} title="Contact us" />

      <div className="container md:p-20 p-4 h-full md:w-md mb-6 max-w-full">
        <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">
          How can we help you?
        </p>
        <div className="flex">
          <form className="bg-white p-4 md:p-10 rounded-lg md:h-full w-full shadow" onSubmit={handleSubmit}>
            {contactData && <div className="flex justify-between items-center px-4 py-3 border border-main rounded text-main">
              <span>Message sent successfully!</span>
            </div>}
            
            <div className="my-6">
              <label className="text-sm text-gray-400" htmlFor="email">Email</label>
              <input
                type="text"
                className="
                    first-letter:block
                    w-full
                    rounded-lg 
                    border-gray-200
                    focus:ring-0 
                    focus:border-gray-200
                "
                placeholder="xxxx@example.com..."
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <label className="text-sm text-gray-400" htmlFor="content">Leave us your message</label>
            <textarea
              className=" border-gray-200 focus:ring-0 focus:border-gray-200 rounded-lg w-full text-sm"
              placeholder="Your Message..."
              id="content"
              name="content"
              value={data.content}
              onChange={handleChange}
              rows={4}
            ></textarea>
            <div className="m-4 text-right">
              <button
                className="bg-main text-white px-6 py-2 hover:bg-main-light font-semibold rounded-lg"
                disabled={loading}
              >
                {loading ? <ImSpinner9 className="animate-spin" /> : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="w-[350px] pl-6 text-lg text-gray-700">
            <p className="flex leading-none mb-4"><BsPersonFill className="mr-1 flex-shrink-0" /> Ric's consulting</p>

            <p className="flex leading-none mb-4"><IoLocationSharp className="mr-1 flex-shrink-0" /> PO box 28684 Sandy Springs, GA 30358</p>

            <p className="flex leading-none mb-4"><IoMail className="mr-1 flex-shrink-0" /> ricsconsulting88@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
