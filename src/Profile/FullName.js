import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';

const FullName = () => {
    return (
        <div className="name">
                    <div className="na">

         <Form.Label> <h3> Please enter your Name </h3> </Form.Label> </div>
    <Form.Control type="email" placeholder="Enter Name" />  <br/>

        </div>
    )
}

export default FullName
