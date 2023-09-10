import React from 'react'
import HeroSlider from '../components/ProductCard/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/ProductCard/FindCarForm';
import '../styles/find-car-form.css'

const Home = () => {
    return (

        <Helmet title='Home'>
            {/* ---- home section -------- */}
            <section className="p-0 hero_slider-section">
                <HeroSlider />
            </section>

            <div className="hero_form">
                <Container>
                    <Row className="form_row">
                        <Col lg='4' md='4'>
                            <div className="find_cars-left">
                                <h2>Find your best cars here</h2>
                            </div>
                        </Col>
                        <Col lg='8' md='8' sm='12'>
                            <FindCarForm />
                        </Col>
                    </Row>
                </Container>
            </div>

        </Helmet>


    )
}

export default Home;