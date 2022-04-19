import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextApiData } from '../../App';
const Checkout = () => {
    const { serviceDetails } = useParams()
    const [products, setProducts] = useContext(ContextApiData)
    const [details, setDetails] = useState({})
    // console.log(products)
    // console.log(details)

    const productsDetails = products.find(pd => pd.id === serviceDetails)
    console.log(productsDetails)



    return (
        <div>
            <div className='flex justify-center items-center py-8 mt-10'>
                <img className='w-2/6 h-2/6 rounded mr-5' src={productsDetails?.picture} alt="" />
                <div className='shadow p-3 w-50'>
                    <p className='w-96 h-[400]  text-1xl font-bold ' >Proceed to Order: <span className='text-red-600'>{productsDetails?.name}</span> </p>
                    <p className='text-red-600 font-bold pr-2'>Price{productsDetails?.price}</p>
                    <p>{productsDetails?.description}</p>
                    <button className='bg-yellow-300 p-2 rounded hover:text-white hover:bg-red-600'>Order Here</button>
                </div>

            </div>


        </div>
    );
};

export default Checkout;