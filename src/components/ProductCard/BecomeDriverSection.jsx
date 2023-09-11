import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import driverImg from '../../assests/all-images/toyota-offer-2.png'
import '../../styles/become-driver.css'

const BecomeDriverSection = () => {
    return (
        <>
            <section className='become_driver'>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <img src={driverImg} alt="" className='w-100' />
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <h2 className="section_title become_driver-title">
                                Dow you want to Earn with us? So Don't be late
                            </h2>
                            <button className="btn become_driver-btn mt-4">
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