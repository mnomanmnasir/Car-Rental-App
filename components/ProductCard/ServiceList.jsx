import React, { useEffect } from 'react'
import { Col } from 'reactstrap'
import '../../styles/service-list.css'
import servicesData from '../../assests/data/serviceData'
import AOS from 'aos';
import 'aos/dist/aos.css';



const ServiceList = () => {


    useEffect(() => {

        AOS.init({
            duration: 950,
        });
    })



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
        <div data-aos="flip-down"
            data-aos-delay="300" data-aos-easing="ease-out-cubic" className="service_item">
            <span className='mb-3 d-inline-block'>
                <i class={item.icon} ></i>
            </span>
            <h6>
                {item.title}
            </h6>
            <p className="section_description">{item.desc}</p>
        </div>

    </Col>

)

export default ServiceList;