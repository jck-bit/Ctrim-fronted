import React, {useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
           <Card>
               <Card.Body>
                 <h2 className="text-centre mb-4">sign Up </h2>
                 <Form>
                    <Form.Group id="email" >
                      <Form.Label>Email</Form.Label>
                      <Form.Control type ="email" ref ={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password" >
                      <Form.Label>password</Form.Label>
                      <Form.Control type ="password" ref ={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-Confirm" >
                      <Form.Label>password Confirmatiom</Form.Label>
                      <Form.Control type ="password" ref ={passwordConfirmRef} required />
                    </Form.Group>
                    <div className="w-100">
                    <Button type="submit">Sign Up</Button>
                    </div>
                 </Form>
               </Card.Body> 
            </Card> 
           <div className="w-100 text-center mt-2">
               Alraedy Have an account?
           </div>
        </>
    )
}

export default Signup
