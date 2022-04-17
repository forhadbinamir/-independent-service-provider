import React from 'react';
import useProducts from '../../Hooks/useProducts';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useProducts()
    const serviceSlice = services.slice(0, 6)
    return (
        <div>
            <h2 className='bold text-center my-5'>Our day <span className='text-red-600'>Services</span></h2>
            <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:cols-1 gap-5">
                {
                    serviceSlice.map(pd => <SingleService
                        key={pd.id}
                        service={pd}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;