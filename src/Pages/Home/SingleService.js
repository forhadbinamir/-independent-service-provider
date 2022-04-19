import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const navigate = useNavigate()
    const { picture, name, price, description, id } = service;

    const handleServiceDetails = () => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='gap-45 border rounded lg:h-[480px] md:h-[450px] sm:h-[400px] shadow relative hover:transition-opacity'>
            <img className='w-100 rounded' src={picture} alt="" />
            <div className="px-2">
                <h3>{name}</h3>
                <h4>Price: <span className='text-red-600'>{price}</span></h4>
                <p>{description.slice(0, 150)}</p>
            </div>
            <button onClick={handleServiceDetails} className='bg-red-600 text-white p-2 rounded w-full absolute bottom-0 hover:bg-red-800'>Book My Service</button>
        </div>
    );
};

export default SingleService;