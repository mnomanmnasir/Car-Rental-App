import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import driverImg from '../../assests/all-images/toyota-offer-2.png'
import '../../styles/become-driver.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




const BecomeDriverSection = () => {


    useEffect(() => {

        AOS.init({
            duration: 950,
        });
    })

    return (
        <>
            <section className='become_driver'>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12' className='become_driver-img'>
                            <img src={driverImg} alt="" className='w-100' data-aos="fade-right"
                                data-aos-delay="300" data-aos-easing="ease-out-cubic"  />
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <h2 data-aos="fade-left"
                                data-aos-delay="300" data-aos-easing="ease-out-cubic"  className="section_title become_driver-title">
                                Do you want to Earn with us? So Don't be late
                            </h2>
                            <button data-aos="fade-left"
                                data-aos-delay="600" data-aos-easing="ease-out-cubic"  className="btn become_driver-btn mt-4">
                                Become a driver
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BecomeDriverSection;