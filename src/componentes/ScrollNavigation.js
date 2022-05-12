
const ScrollNavigation = ({ title }) => {
  return (
    <div>
      <button
        className="inline-flex items-center 
        justify-center cursor-pointer 
        w-12 h-12 font-semibold hover:bg-main hover:text-white border border-main
        transition duration-300 rounded-full"
      >
        {title}
      </button>
    </div>
  );
};
export default ScrollNavigation;
