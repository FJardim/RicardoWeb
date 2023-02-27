import BannerPage from "../componentes/BannerPage";
import foodBg from "../assets/img1.jpg";
import { useState } from "react";
import useAxios from "../hooks/useAxios";

const Contactus = () => {
  const [data, setData] = useState({
    email: '',
    content: '',
  });

  const [{ data: contactData, loading }, sendEmail] = useAxios({ url: '/email-contacts', method: 'POST' }, { manual: 'true' });

  const handleChange = (e) => {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    sendEmail({ data });
  }
  
  return (
    <div className="">
      <BannerPage image={foodBg} title="Contact us" />

      <div className="container md:p-20 p-4 h-full md:w-md mb-6 max-w-full">
        {contactData
          ? <div className="bg-white p-4 md:p-10 rounded-lg md:h-full w-full shadow text-center">
            <h3 className="text-3xl font-semibold text-main">Message sent successfully!</h3>
          </div>
          : (
            <>
              <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">
                How can we help you?
              </p>
              <form className="bg-white p-4 md:p-10 rounded-lg md:h-full w-full shadow" onSubmit={handleSubmit}>
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
                    Send Message
                  </button>
                </div>
              </form>
            </>
          )}
      </div>
    </div>
  );
};

export default Contactus;
