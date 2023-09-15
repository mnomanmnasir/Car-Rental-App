import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../../styles/hero-slider.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const HeroSlider = () => {

    useEffect(() => {

        AOS.init({
            duration: 950,
        });
    })


    const setting = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    }
    return (
        <Slider {...setting} className='hero_slider'>
            <div className="slider_item slider_item-01 mt-0">
                <Container>
                    <div className="slider_content">
                        <h4 className="text-light mb-3" data-aos="fade-right"
                            data-aos-delay="100">For Rent $70 Per Day</h4>
                        <h1 className="text-light mb-4" data-aos="fade-right"
                                    data-aos-delay="300">Reserve Now and Get 50% off</h1>
                        <button className="btn reserve_btn mt-4" data-aos="fade-right"
                                    data-aos-delay="600">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className="slider_item slider_item-02 mt-0">
                <Container>
                    <div className="slider_content">
                        <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% off</h1>
                        <button className="btn reserve_btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className="slider_item slider_item-03 mt-0">
                <Container>
                    <div className="slider_content">
                        <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% off</h1>
                        <button className="btn reserve_btn mt-4">
                            <Link to='/cars'>Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
        </Slider>
    )
}

export default HeroSlider;