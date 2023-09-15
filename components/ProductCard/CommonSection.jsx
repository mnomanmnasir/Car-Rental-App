import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/common-section.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CommonSection = ({ title }) => {

    useEffect(() => {

        AOS.init({
            duration: 950,
        });
    })

    return (
        <section className="common_section">
            <Container className="text-center">
                <h1 className="text-light" data-aos="fade-right"
                                data-aos-delay="300" data-aos-easing="ease-out-cubic">{title}</h1>
            </Container>
        </section>
    )
}


export default CommonSection;