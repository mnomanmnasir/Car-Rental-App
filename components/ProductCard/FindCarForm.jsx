import Reac, { useEffect } from 'react'
import '../../styles/find-car-form.css'
import { Form, FormGroup } from 'reactstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';





const FindCarForm = () => {


    useEffect(() => {

        AOS.init({
            duration: 950,
        });
    })


    return (
        <Form className='form'>

            <div data-aos="fade-left"
                data-aos-delay="300" data-aos-easing="ease-out-cubic" className='d-flex align-items-center justify-content-between flex-wrap'>

                <FormGroup className='form_group'>
                    <input type="text" placeholder='Form Address' required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type="text" placeholder='To Address' required />
                </FormGroup>

                <FormGroup className='form_group'>
                    <input type="date" placeholder='Journey Date' required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input className='journey_time' type="time" placeholder='Journey Time' required />
                </FormGroup>
                <FormGroup className='select_group'>
                    <select>
                        <option value="ac">AC Car</option>
                        <option value="non-ac">Non AC Car</option>
                    </select>
                </FormGroup>
                <FormGroup className='form_group'>
                    <button className="btn find_car-btn">Find Car</button>
                </FormGroup>
            </div>
        </Form>
    )
}


export default FindCarForm; 