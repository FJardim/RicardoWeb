
const ScrollNavigation = ({ title }) => {
  return (
    <div>
      <button
        className="inline-flex items-center 
        justify-center cursor-pointer 
        w-12 h-12 font-semibold hover:bg-teal-400 hover:text-white border border-teal-400 
        transition duration-300 rounded-full"
      >
        {title}
      </button>
    </div>
  );
};
export default ScrollNavigation;
