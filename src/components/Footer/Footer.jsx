import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'




const quickLinks = [
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '#',
        display: 'Privacy Policy'
    },

    {
        path: '/cars',
        display: 'Car Listing'
    },
    {
        path: '/blogs',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]


const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (

        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' md='3' sm='4'>
                        <div className="logo footer_logo">
                            <h1>
                                <Link to='/home' className='d-flex align-items-center gap-2'>
                                    <i className="ri-car-line">
                                    </i>
                                    <span>Rent by Car <br /> Service</span>
                                </Link>
                            </h1>

                        </div>

                        <p className="footer_logo-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet repellendus nostrum, beatae cum praesentium reiciendis delectus rem veritatis totam eius cupiditate aspernatur voluptates accusamus, velit vel voluptatibus debitis consectetur.
                        </p>
                    </Col>
                    <Col lg='2' md='4' sm='6'>
                        <div className="mb-4">
                            <h5 className="footer_link-title">Quick Links</h5>

                            <ListGroup>
                                {
                                    quickLinks.map((item, index) => (
                                        <ListGroupItem key={index} className='p-0 mt-3 quick_link'>
                                            <Link to={item.path}> {item.display}</Link>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <div className="mb-4">
                            <h5 className="footer_link-title mb-4">
                                Head Office
                            </h5>
                            <p className="office_info">New Karachi, Pakistan</p>
                            <p className="office_info">Phone: +92333XXXXXXX</p>
                            <p className="office_info">Email : coderdreamer93@gmail.com</p>
                            <p className="office_info">Office Time : 10am - 7pm</p>

                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                        <div className="mb-4">
                            <h5 className="footer_link-title">
                                Newsletter
                            </h5>
                            <p className="office_info">Subscribe our newsletter</p>
                            <div className="newsletter">
                                <input type="email" placeholder='Email' />
                                <span>
                                    <i className="ri-send-plane-line"></i>
                                </span>
                            </div>
                        </div>
                    </Col>

                <Col lg='12'>
                    <div className="footer_bottom">
                        <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i className="ri-copyright-line"></i>Copyright {year}, 
                            Developed by Noman Nasir, All Right Reserved
                        </p>
                    </div>
                </Col>
                </Row>
            </Container>
        </footer>
    )

}


export default Footer;