import React, { useEffect } from 'react'
import Slider from 'react-slick'
import ava01 from '../../assests/all-images/ava-1.jpg'
import ava02 from '../../assests/all-images/ava-2.jpg'
import ava03 from '../../assests/all-images/ava-3.jpg'
import ava04 from '../../assests/all-images/ava-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/testimonials.css'

const Testimonials = () => {


    useEffect(() => {

        AOS.init({
            duration: 950,
        });
    })


    const setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {

                breakpoint: 992,
                setting: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <Slider {...setting}>
            <div className="testimonials py-4 px-3">
                <p className="section_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati in quibusdam aut aspernatur tenetur porro rerum dolorem eum, quidem distinctio quos possimus sunt non reiciendis totam earum similique a.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava01} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">Noman Nasir</h6>
                        <p className="section_description">Senior Frontend Developer</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p className="section_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati in quibusdam aut aspernatur tenetur porro rerum dolorem eum, quidem distinctio quos possimus sunt non reiciendis totam earum similique a.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">Mohsin Imran</h6>
                        <p className="section_description">Senior PHP / Laravel Developer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p className="section_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati in quibusdam aut aspernatur tenetur porro rerum dolorem eum, quidem distinctio quos possimus sunt non reiciendis totam earum similique a.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava03} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">Abdul Ahad Mansori</h6>
                        <p className="section_description">MERN Stack Developer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p className="section_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati in quibusdam aut aspernatur tenetur porro rerum dolorem eum, quidem distinctio quos possimus sunt non reiciendis totam earum similique a.
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava04} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className="mb-0 mt-3">Muhammad Abbas</h6>
                        <p className="section_description">Shopify Developer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials;