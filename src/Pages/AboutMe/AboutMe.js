import React from 'react';
import image from '../../images/Forhad-img/Forhad Hossain.jpg'
const AboutMe = () => {
    return (
        <div className='grid grid-cols-2 mt-10'>
            <div className='mx-auto'>
                <img className='w-[400px] h-[400px] rounded-lg' src={image} alt="" />
            </div>
            <div className='rounded bg-gray-100 p-20'>
                <p className='bg-white p-3 rounded text-gray-500'>I am <strong>Forahd Hossain</strong>, Front-end  Web design developer on React js & WordPress Theme Developer from Bangladesh, living in Riyadh, Saudi Arabia. I am passionate about creating and designing user interface websites that help businesses reach more customers and look better online. I'm currently working on Full Website Creation WordPress Theme Customization Responsive Web Design Speed up Website PSD to HTML Conversion Plugin Usage WordPress Page Builder, and so on. Thanks for taking the time to learn more about me.</p>
            </div>
        </div>
    );
};

export default AboutMe;