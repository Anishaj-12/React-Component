import React from 'react'
import {Form,Button} from 'react-bootstrap';

const Address = () => {
    return (
        <div>
            <div className="App">
            <header className="App-header">
 

            <Form>
            <div class="square"> 

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Please enter your Address </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Label>Please enter your Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <div className="tout">
    <Form.Check type="checkbox" label="Check out" />
    </div>
  </Form.Group>

    <Button variant="primary" size="lg">
      Sign In 
    </Button>{' '}
    </div>

</Form>


</header>
    </div>
        </div>
    )
}

export default Address
