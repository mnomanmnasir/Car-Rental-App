import React from 'react'
import HeroSlider from '../components/ProductCard/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/ProductCard/FindCarForm';
import '../styles/find-car-form.css'
import AboutSection from '../components/ProductCard/AboutSection';
import ServiceList from '../components/ProductCard/ServiceList';
import CarItem from '../components/ProductCard/CarItem';
import carData from '../assests/data/carData';
import BecomeDriverSection from '../components/ProductCard/BecomeDriverSection';
import Testimonials from '../components/ProductCard/Testimonials';
import BlogList from '../components/ProductCard/BlogList';



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
                            <div className="find_cars-left text-center">
                                <h2>Find your best cars here</h2>
                            </div>
                        </Col>
                        <Col lg='8' md='8' sm='12'>
                            <FindCarForm />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*----------- about section ---------------  */}
            <AboutSection />

            {/* ------------ services section ------------- */}

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className="section_subtitle">See our</h6>
                            <h2 className="section_title">Popular Service</h2>
                        </Col>

                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/* ---------- car offer section ---------- */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h6 className="section_subtitle">Come with</h6>
                            <h2 className="section_title">Hot Offers</h2>
                        </Col>
                        {
                            carData.slice(0, 6).map(item => (


                                <CarItem item={item} key={item.id} />
                            )
                            )
                        }
                    </Row>
                </Container>
            </section>

            {/* ------------- become a driver section ----------------- */}

            <BecomeDriverSection />

            {/* -------- testimonials section ---------------- */}

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-4 text-center'>

                            <h6 className="section_subtitle">Our Clients Says</h6>
                            <h2 className="section_title">Testimonials</h2>

                        </Col>
                        <Testimonials />
                    </Row>
                </Container>
            </section>

            {/* -------------  Blog List section ---------------- */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className="section_subtitle">Explore our blogs</h6>
                            <h2 className="section_title">Latest Blogs</h2>
                        </Col>
                        <BlogList />
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Home;