import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/ProductCard/CommonSection';
import BlogList from '../components/ProductCard/BlogList'




const Blog = () => {
    return (
        <Helmet title='Blogs'>
            <CommonSection title='Blogs' />
            <section>
                <Container>
                    <Row>
                        <BlogList />
                        <BlogList />
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}


export default Blog;