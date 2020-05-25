import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import "./FormJoinCompany.css";
import Button from 'react-bootstrap/Button';

const FormJoinCompany = () => {

    //FIREBASE:
    const firebaseFold = require('firebase/app');
    require('firebase/auth');
    require('firebase/database');

    const db = firebaseFold.database().ref('company');
    const saveFormCompany = () => {
    const newFormRef = db.push();
    newFormRef.set(formCompany);
    };

    const[formCompany, setFormCompany] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        info: "",
    });
    
    const submit = (e) => {
        e.preventDefault();
        saveFormCompany();
    }; 
    const handleChange = (e) => {
        const {  name, value } = e.target;
        return  (
        setFormCompany( () => {
            return {
                ...formCompany, 
                [name]: value,
            }
            })
        );
    };   

    return (
        <Form className="form" onSubmit={submit}>
            <h1>Add your business: </h1>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>What's name of your company ?</Form.Label>
                <Form.Control type="text" 
                              placeholder="Your name..." 
                              name="name"
                              value ={formCompany.name} 
                              onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>What's your phone number ?</Form.Label>
                <Form.Control type="number" 
                              placeholder="Your phone number..."  
                              name="phoneNumber"
                              value ={formCompany.password} 
                              onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>What's your e-mail ?</Form.Label>
                <Form.Control type="email" 
                              name="email"
                              placeholder="Your e-mail..." 
                              value={formCompany.email}
                              onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Please enter a password.</Form.Label>
                <Form.Control type="password" 
                              placeholder="Your password..."  
                              name="password"
                              value ={formCompany.password} 
                              onChange={handleChange}/>
            </Form.Group>
           
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>How did you know about Us ?</Form.Label>
                <Form.Control as="select" name="info"
                                          onChange={handleChange}>
                    <option>Choose...</option>
                    <option>Facebook</option>
                    <option>Friends</option>
                    <option>Instagram</option>
                    <option>Other...</option>
            </Form.Control>
            </Form.Group>
        <Button variant="primary" type="submit">SEND</Button>
      </Form>
      );
};
export {
    FormJoinCompany
}

  


