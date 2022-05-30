import ButtonSearch from "./ButtonSearch";

const SearchHome = () => {

    return (
        <div className='hidden md:block absolute flex p-8 w-3/6 h-2/3 z-10 rounded-xl' style={{ top: '12%', left: '25%', background: 'rgba(0,0,0, .4)' }}>
            <div className="m-auto w-full">
                <ButtonSearch />
                <div className="relative text-white text-center text-base">
                    <input
                        className='text-black text-xs h-12 border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 
                            leading-4 border-0 rounded-bl-lg rounded-r-lg w-full top-0 right-0'
                        type="text"
                        placeholder="Enter the item you are looking for or a characteristic (example:Rice, Sushi)..." />
                    <button className="absolute h-full px-6 text-center bg-main top-0 right-0 rounded-r-lg font-semibold">Search</button>
                </div>

            </div>

        </div>
    );
}
export default SearchHome;