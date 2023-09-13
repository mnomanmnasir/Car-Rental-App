import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/ProductCard/CommonSection'
import AboutSection from '../components/ProductCard/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/ProductCard/BecomeDriverSection'
import driveImg from '../assests/all-images/drive.jpg'
import OurMembers from '../components/ProductCard/OurMembers'
import '../styles/about.css'

const About = () => {
    return (

        <Helmet title='About'>
            <CommonSection title='About Us' />

            <AboutSection aboutClass= 'aboutPage'/>

            <section className="about_page-section">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <div className="about_page-img">
                                <img src={driveImg} alt="" className='w-100 rounded-3' />
                            </div>
                        </Col>

                        <Col lg='6' md='6' sm='12'>
                            <div className="about_page-content">
                                <h2 className="section_title">We are commited to provide safe ride solution</h2>
                                <p className="section_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore debitis, dolorum iusto rem, pariatur deserunt, maxime voluptatem facere provident vero! Voluptatem error minus porro maxime, mollitia debitis repudiandae ea!</p>
                                <p className="section_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore debitis, dolorum iusto rem, pariatur deserunt, maxime voluptatem facere provident vero! Voluptatem error minus porro maxime, mollitia debitis repudiandae ea!</p>
                                <div className="d-flex align-item-center gap-3 mt-4">
                                    <span className="fs-3"><i className="ri-phone-line"></i></span>
                                    <div>
                                        <h6 className="section_subtitle">Need Any Help</h6>
                                        <h4>+92333XXXXXXXX</h4>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            <BecomeDriverSection />
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className="section_subtitle">Experts</h6>
                            <h2 className="section_title">Our Members</h2>
                        </Col>
                        <OurMembers />
                    </Row>
                </Container>
            </section>
        </Helmet>

    )
}


export default About;