import React,{useState} from 'react'
import {Form,Button,Col,Row} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

import { Dropdown,DropdownButton } from 'react-bootstrap';
import Footerr from './Footerr';
import Header from './Header';
import{Router,Switch,Route,Routes} from 'react-router-dom';
const Signup_Customer_vendor = () => {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className='register'>
      <Header/>
    <div>
      <h2 style={{color: "Gray"}}>Register</h2>




    
      
    
{/* 
<div class="container">
<div className='mt-5 mb-2' >
  <input  type="radio" id="customer" value="customer" checked={userType === 'customer'} onChange={handleUserTypeChange}/>
  <label >  Sign up as Customer </label>
</div>
<div >
  <input type="radio" id="vendor" value="vendor" checked={userType === 'vendor'} onChange={handleUserTypeChange} />
  <label > Sign up as Vendor</label>
</div>
</div>  */}

<div className="container">
    <div>
<Form className='form2 mt-5'>
      <Row>
        <Col sm={3}>
          <Form.Check
            type="radio"
            label="Sign Up as Customer"
            name="userType"
            value="customer"
            checked={userType === 'customer'}
            onChange={handleUserTypeChange}
          />
        </Col>
        <Col sm={3}>
          <Form.Check
            type="radio"
            label="Sign Up as Vendor"
            name="userType"
            value="vendor"
            checked={userType === 'vendor'}
            onChange={handleUserTypeChange}
          />
        </Col>
      </Row>
    </Form>
    </div>
    </div>


              


      {userType === 'customer' && (
        <div class="container">
        <Form>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name  : </Form.Label>
            <Form.Control type="text" placeholder="Enter full name . . . " />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password : </Form.Label>
            <Form.Control type="password" placeholder="Enter Password . . ." />
          </Form.Group>
        </Row>
  
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone</Form.Label>
          <Form.Control type= "number" placeholder="Phone number . . . " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Email Address : </Form.Label>
          <Form.Control type= "email" placeholder="Enter Email  . . . " />
        </Form.Group>

        
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
        
      )}

      {userType === 'vendor' && (
        <div class="container">
        <Form>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name  : </Form.Label>
            <Form.Control type="text" placeholder="Enter full name . . . " />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password : </Form.Label>
            <Form.Control type="password" placeholder="Enter Password . . ." />
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone  : </Form.Label>
            <Form.Control type="number" placeholder="Enter phone number  . . . " />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Address : </Form.Label>
            <Form.Control type="text" placeholder="Enter Full  Address . . ." />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Government ID Proof  : </Form.Label>
          <Form.Control type= "number" placeholder="Enter Adhar/PAN no.  . . . " />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      )}
    </div> 
    <Footerr/>
    </div>
    
  );
};


export default Signup_Customer_vendor
