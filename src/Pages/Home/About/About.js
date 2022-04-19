import React from 'react';
import aboutimg1 from '../../../images/about/about1.jpg'
import aboutimg2 from '../../../images/about/about2.jpg'
const About = () => {
    return (
        <div className='mb-40 mt-20'>
            <h2 className='text-center text-4xl font-bold pb-2 mx-auto'>My <span className='text-red-600'>Gym</span></h2>
            <div className='lg:flex justify-center items-center container md:flex-row sm:flex-row '>
                <div className="image-area relative p-20 w-[100%] sm:mb-40 lg:mb-20 md:mb-20 ">
                    <div className=''>
                        <img className='w-[250px] rounded' src={aboutimg1} alt="" />
                    </div>
                    <div className='absolute top-60 left-52'>
                        <img className='w-[250px] rounded' src={aboutimg2} alt="" />
                    </div>
                </div>
                <div className="w-[100%]">
                    <div className='p-2 lg:mt-3 md:mt-6 sm:mt-20'>
                        <h2 className='border-bottom pb-2 font-bold'>My Gym Benefits</h2>
                        <p>Want to feel better, have more energy and even add years to your life? Just exercise.
                            <br />
                            The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, regardless of age, sex or physical ability.
                            <br />
                            Need more convincing to get moving? Check out these seven ways that exercise can lead to a happier, healthier you.
                            <br />
                            <br />
                            Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. The more intense the activity, the more calories you burn. !</p>
                        <button className='border border-red-600 py-3 px-8 rounded-full bg-red-600 text-white font-bold hover:bg-red-800'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;