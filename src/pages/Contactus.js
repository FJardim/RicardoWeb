const Contactus = () => {
  return (
    <div className="flex">
      <div className="container p-20 h-full w-full mb-20">
        <p className="md:text-4xl text flex justify-center md:justify-start font-bold text-black mb-12">
          Contact us
        </p>
        <div className="bg-white p-10 rounded-lg md:h-full md:w-full w-56 shadow">
          <p className="md:text-xl text-base text-gray-500 font-medium">
            How can we help you?
          </p>
          <div className="my-6">
            <p className="text-sm text-gray-300">Email</p>
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
            />
          </div>
          <span className="text-main font-semibold">Leave us your query</span>
          <textarea
            className=" border-gray-200
                            focus:ring-0 focus:border-gray-200 rounded-lg w-full text-sm text-gray-300 hover:text-black hover:text-sm"
            placeholder="Your Massager..."
          ></textarea>
          <div className="m-4 text-right">
            <button className="bg-main text-white px-6 py-2 hover:bg-main-light font-semibold rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
