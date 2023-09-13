import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/ProductCard/CommonSection';
import CarItem from '../components/ProductCard/CarItem'
import carData from '../assests/data/carData'

const CartListing = () => {
    return (
        <Helmet title='Car'>
            <CommonSection title='Car Listing' />

<section>
    <Container>
        <Row>
            <Col lg='12'>
            <div className="d-flex align-items-center gap-3 mb-5">
                <span className='d-flex align-items-center gap-2'><i className="ri-sort-asc"></i>Sort by</span>
         
         <select>
            <option>Select</option>
            <option value="">Low to High</option>
            <option value="">High to Low</option>
         </select>
         
            </div>
            </Col>
            {
                carData.map((item)=> (
                    <CarItem item={item} key={item.id} />
                ))
            }
        </Row>
    </Container>
</section>
        </Helmet>
    )
}


export default CartListing;