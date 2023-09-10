import React from 'react'
import '../../styles/find-car-form.css'
import { Form, FormGroup } from 'reactstrap'
const FindCarForm = () => {
    return (
        <Form>

            <div className='d-flex align-items-center justify-content-between flex-wrap'>
     
     <FormGroup className='form_group'>
        <input type="text" placeholder='Form Address' required />
     </FormGroup>
     
     <FormGroup className='form_group'>
        <input type="date" placeholder='Journey Date' required />
     </FormGroup>
     <FormGroup className='form_group'>
        <input type="time" placeholder='Journey Time' required />
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