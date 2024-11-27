import React, { useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/ProductCard/CommonSection';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const socialLinks = [

    {
        url: '#',
        icon: 'ri-facebook-line'
    },

    {
        url: '#',
        icon: 'ri-instagram-line'
    },

    {
        url: '#',
        icon: 'ri-linkedin-line'
    },

    {
        url: '#',
        icon: 'ri-twitter-line'
    }
]

const Contact = () => {

    useEffect(() => {

        AOS.init({
            duration: 950,
        });
    })

    return (
        <Helmet title='Contact'>
            <CommonSection title='Contact' />

            <Container>

                <Row>
                    <Col lg='7' md='7' className='mt-5 mb-5'>
                        <h6 className="fw-bold fs-2" data-aos="fade-right"
                                data-aos-delay="300" data-aos-easing="ease-out-cubic">Get in Touch</h6>
                        <Form data-aos="fade-right"
                                data-aos-delay="600" data-aos-easing="ease-out-cubic">
                            <FormGroup className='contact_form'>
                                <Input placeholder='Your Name' type='text' />
                            </FormGroup>
                            <FormGroup className='contact_form'>
                                <Input placeholder='Email' type='email' />
                            </FormGroup>
                            <FormGroup className='contact_form'>
                                <textarea rows="5" placeholder='Message' className='textarea'></textarea>
                            </FormGroup>
                            <button className='btn contact_btn' type='submit'>Submit</button>
                        </Form>
                    </Col>

                    <Col lg='5' md='5' className='mt-5 mb-5'>
                        <div data-aos="fade-left"
                                data-aos-delay="400" data-aos-easing="ease-out-cubic" className="contact_info">
                            <h6 className="fw-bold fs-2">Contact Information</h6>
                            <p className="section_description mb-0">New Karachi Pakistan</p>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className='mt-4 mb-1'>Phone:</h6>
                                <p className="section_description mt-4 mb-2">+92333XXXXXXXX</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className=' mb-0'>Email:</h6>
                                <p className="section_description mb-1">coderdreamer92@gmail.com</p>
                            </div>
                            <h6 className="fw-bold mt-3">Follow us</h6>
                            <div className='d-flex align-items-center gap-4 mt-3'>
                                {
                                    socialLinks.map((item, index) => (
                                        <Link to={item.url} key={index} className='social_link-icon'>
                                            <i className={item.icon}></i>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Helmet>

    )

}

export default Contact;