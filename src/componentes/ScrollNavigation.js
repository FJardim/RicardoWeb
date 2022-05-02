const ScrollNavigation = ({ title }) => {
  return (
    <div>
      <button
        className="inline-flex items-center justify-center cursor-pointer w-6 h-6 font-semibold hover:bg-main hover:text-white border border-gray-300 transition duration-300 p-5
      rounded-full text-gray-700"
      >
        {title}
      </button>
    </div>
  );
};
export default ScrollNavigation;
