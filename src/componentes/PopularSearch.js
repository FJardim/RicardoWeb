import React from 'react';

const PopularSearch = ({ titulo, img, text }) => {
    return (
        <div className="mx-6 bg-white px-5 py-3 h-66 pb-2 round">
            <div className='row mt-2'>
                <div className='justify-around items-center columns-2'>
                    <div className='mt-4'>
                        {text}
                    </div>
                    <p className="font-bold text-3xl mt-4">
                        {titulo}
                    </p>
                    <button class="bg-red-500 text-white py-2 px-3 rounded mt-4 mb-2">
                        Ver más
                    </button>
                    <div>
                        <img className='h-48' src={img} alt="img-beneficios" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularSearch;
