import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../styles/header.css'


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
                            <div className="header_top_right">
                                <Link to='#'><i className="ri-login-circle-line"></i>Login</Link>
                                <Link to='#'><i className="ri-user-line"></i>Register</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )

}


export default Header;