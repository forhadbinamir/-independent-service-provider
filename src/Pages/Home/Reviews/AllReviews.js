import { ArrowRightIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { DynamicStar } from 'react-dynamic-star';

const AllReviews = (props) => {
    const { name, picture, about, ratings, } = props.product
    return (
        <div className='h-96 border rounded-lg shadow p-3 bg-slate-50 relative'>
            <img className='w-2/6 mx-auto rounded-full ' src={picture} alt="" />
            <h2>{name}</h2>
            <h2>Ratings: <span className='text-orange-500 font-bold'>{ratings}</span></h2>
            <div className='flex justify-center'>
                <DynamicStar
                    rating={ratings}
                    width={20}
                    height={20}
                >

                </DynamicStar>
            </div>
            <p>{about.slice(0, 200)}</p>
            <div className="flex items-center mb-2 text-blue-700 read-more absolute bottom-0">
                <button className='mr-1 font-bold hover:pr-1'>Read More</button>
                <ArrowRightIcon className='w-4 h-4 font-bold'></ArrowRightIcon>
            </div>
        </div>
    );
};

export default AllReviews;