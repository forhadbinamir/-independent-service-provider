import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider-img/slider1.jpg'
import slider2 from '../../images/slider-img/slider2.jpg'
import slider3 from '../../images/slider-img/slider3.jpg'
const Slider = () => {
    return (
        <div>
            <Carousel className='z-10'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Practice All Together</h3>
                        <p>Tow Hours Will be Practice Together</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Practice Individual </h3>
                        <p>Individual Practice needed two hours for everyday.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Practice Individual hardly</h3>
                        <p>Individual Practice needed two hours for everyday.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;