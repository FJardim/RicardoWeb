import React from 'react';

const PopularSearch = ({ title, img }) => {
    return (
        <div className="flex bg-white w-full rounded-md overflow-hidden shadow-md">
            <div className='justify-around items-center py-3 px-4 w-full'>
                <div className='text-3xl px-4 py-3 font-bold'>
                    {title}
                </div>
                <button class="bg-main text-white py-2 px-3 rounded my-4 mx-4">
                    See more
                </button>
            </div>
            <div className="w-full">
                <img className='w-full h-full' src={img} alt="PopularSearch" />
            </div>
        </div>
    );
}

export default PopularSearch;
