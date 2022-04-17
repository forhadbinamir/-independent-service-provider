import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [date, setDate] = useState();

    const getYear = () => {
        setDate(new Date().getFullYear());
    }
    useEffect(() => {
        getYear();
    }, [])
    return (
        <div className='bg-black mt-10'>
            <p className='py-5 text-center text-gray-400'> &copy;Copyright {date} Developed by <span className='text-red-600'>Forhad Bin Amir</span></p>
        </div>
    );
};

export default Footer;