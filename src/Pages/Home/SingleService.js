import React from 'react';

const SingleService = ({ service }) => {
    const { picture, name, price, description, id } = service;
    return (
        <div className='gap-45 border rounded lg:h-[400px] md:h-[400px] sm:h-[400px] shadow relative hover:transition-opacity'>
            <img className='w-100 rounded' src={picture} alt="" />
            <div className="px-2">
                <h3>{name}</h3>
                <h4>Price: <span className='text-red-600'>{price}</span></h4>
                <p>{description}</p>
            </div>
            <button className='bg-red-600 text-white p-2 rounded w-full absolute bottom-0 hover:bg-red-800'>Book: {name}</button>
        </div>
    );
};

export default SingleService;