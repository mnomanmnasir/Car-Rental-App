import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'
import '../../styles/header.css'



const navLink = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    
    {
        path: '/cars',
        display: 'Cars'
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

const Header = () => {
    return (

        <header>
            <div className="header_top">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_left">
                                <span>
                                    Need Help?
                                </span>
                                <span className="header_top_help">
                                    <i className="ri-phone-fill"></i> +92333XXXXXXXX
                                </span>
                            </div>
                        </Col>

                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                                <Link to='#' className='d-flex align-items-center gap-1'><i className="ri-login-circle-line"></i>Login</Link>
                                <Link to='#' className='d-flex align-items-center gap-1'><i className="ri-user-line"></i>Register</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="header_middle">
                <Container>
                    <Row>
                        <Col lg='4' md='3' sm='4'>
                            <div className="logo">
                                <h1>
                                    <Link to='/home' className='d-flex align-items-center gap-2'>
                                        <i className="ri-car-line">
                                        </i>
                                        <span>Rent by Car <br /> Service</span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>
                        <Col lg='3' md='3' sm='4'>
                            <div className="header_location d-flex align-items-center gap-2">
                                <span><i className="ri-earth-line"></i></span>
                                <div className="header_location-content">
                                    <h4>Karachi, Sindh Pakistan</h4>
                                    <h6>
                                        New Karachi, Pakistan
                                    </h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md='3' sm='4'>
                            <div className="header_location d-flex align-items-center gap-2">
                                <span><i className="ri-time-line"></i></span>
                                <div className="header_location-content">
                                    <h4>Monday to Friday
                                    </h4>
                                    <h6>
                                        10am - 7pm
                                    </h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='2' md='3' sm='0' className='text-end'>
                            <button className="header_btn btn">
                                <Link to='/contact'>
                                    <i className="ri-phone-line"></i>
                                    Request a call
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

<div className="main_navbar">
    <Container>
        <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
                <i className="ri-menu-line"></i>
            </span>
            <div className="navigation">
                <div className="menu">
{
    navLink.map((item, index)=> (
        <NavLink to={item.path} key={index}>{item.display}</NavLink>
    ))
}
                </div>
            </div>
            <div className="nav_right">
                <div className="search_box">
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        </div>
    </Container>
</div>
        </header>
    )

}


export default Header;