import React from 'react';
import About from './About/About';
import Reviews from './Reviews/Reviews';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            {/* <Reviews></Reviews> */}
        </div>
    );
};

export default Home;