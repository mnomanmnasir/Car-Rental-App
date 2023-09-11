import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/service-list.css'
import servicesData from '../../assests/data/serviceData'



const ServiceList = () => {
    return (
        <>
        
            {
                servicesData.map(item => (
                    <ServiceItem item={item} key={item.id} />
                ))
            }
        </>

    )
}


const ServiceItem = ({ item }) => (

    <Col lg='4' md='4' sm='6' className='mb-3'>
        <div className="service_item">
            <span className='mb-3 d-inline-block'>
                <i class={item.icon}></i>
            </span>
            <h6>
                {item.title}
            </h6>
            <p className="section_description">{item.desc}</p>
        </div>

    </Col>

)

export default ServiceList;