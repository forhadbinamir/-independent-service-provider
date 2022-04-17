import React from 'react';
import aboutimg1 from '../../../images/about/about1.jpg'
import aboutimg2 from '../../../images/about/about2.jpg'
const About = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-4xl font-bold border-bottom w-[15%] pb-2 mx-auto'>About <span className='text-red-600'>Us</span></h2>
            <div className='lg:flex justify-center items-center container md:flex-row sm:flex-row '>
                <div className="image-area relative p-20 w-[100%]">
                    <div className=''>
                        <img className='w-[250px] rounded' src={aboutimg1} alt="" />
                    </div>
                    <div className='absolute top-60 left-52'>
                        <img className='w-[250px] rounded' src={aboutimg2} alt="" />
                    </div>
                </div>
                <div className="w-[100%]">
                    <div className='p-2'>
                        <h2 className='border-bottom pb-2 font-bold'>Our Gym Benefits</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quam excepturi cumque deserunt illo tenetur, nulla consequatur pariatur, saepe veritatis odio provident eligendi. Est qui impedit esse vitae debitis!</p>
                        <button className='border border-red-600 py-3 px-8 rounded-full bg-red-600 text-white font-bold hover:bg-red-800'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;