import React from 'react';

const PopularSearch = ({ title, img }) => {
    return (
        <div className="mx-4 my-10 bg-white px-4 py-4 h-64 w-[40rem] pb-2 round">
            <div className='row mt-2'>
                <div className='justify-around items-center columns-2'>
                    <div className='text-3xl px-4 py-3 font-bold'>
                        {title}
                    </div>
                    <button class="bg-teal-400 text-white py-2 px-3 rounded my-4 mx-4">
                        See more
                    </button>
                    <div className="m-auto">
                        <img className='' src={img} alt="PopularSearch" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularSearch;
