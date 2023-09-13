import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import '../../styles/common-section.css'


const CommonSection = ({ title }) => {

    return (
        <section className="common_section">
            <Container className="text-center">
                <h1 className="text-light">{title}</h1>
            </Container>
        </section>
    )
}


export default CommonSection;