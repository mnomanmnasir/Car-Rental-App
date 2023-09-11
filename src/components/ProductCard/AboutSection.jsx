import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assests/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
    return (
        <section>
            <Container>

                <Row>

                    <Col lg='6' md='6'>
                        <div className="about_section-content">
                            <h4 className="section_subtitle">
                                About Us
                            </h4>
                            <h2 className="section_title">
                                Welcome to car rent service
                            </h2>
                            <p className="section_description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta quia, maiores laborum vitae voluptas quaerat laudantium veritatis earum deleniti ex molestiae doloremque voluptates illo officiis repellat tenetur? Odio consequatur enim aspernatur minus. At assumenda soluta dolorem, vel ratione iusto.
                            </p>

                            <div className="about_section-item d-flex align-items-center">
                                <p className="section_description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet.
                                </p>
                                <p className="section_description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>


                            <div className="about_section-item d-flex align-items-center">
                                <p className="section_description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet.
                                </p>
                                <p className="section_description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>


                        </div>

                    </Col>


                    <Col lg='6' md='6'>

                        <div className="about_img">
                            <img src={aboutImg} alt="" className='w-100' />
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection;