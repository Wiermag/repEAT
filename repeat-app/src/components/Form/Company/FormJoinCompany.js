import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import "./FormJoinCompany.css";
import Button from 'react-bootstrap/Button';
import { MapForm } from '../../Maps/MapForm/MapForm';

const FormJoinCompany = () => {

    //FIREBASE:
    const firebaseFold = require('firebase/app');
                         require('firebase/auth');
                         require('firebase/database');

    const db = firebaseFold.database().ref('form-join-company');
    const saveFormCompany = () => {
    const newFormRef = db.push();
    newFormRef.set(formCompany);
    };

    const[formCompany, setFormCompany] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        sale: "",
        info: "",
        position: {
            lat: 0,
            lng: 0
        }
    });
    
    const submit = (e) => {
        e.preventDefault();
        saveFormCompany();
    }; 
    
    const handleChange = (e) => {
        const {  name, value } = e.target;
        return  (
            setFormCompany( (prevState) => {
                return {
                    ...prevState, 
                    [name]: value,
                }
            })
        );
    };   

    const getMarker = positionData => {
        setFormCompany( (prevState) => {
            return {
                ...prevState, 
                position: positionData,
            }
        })
    };
      

    return (
        <Form className="form" id="form-company"onSubmit={submit}>
            <h1>Add your business: </h1>
            <Form.Group controlId="exampleForm.ControlInput11">
                <Form.Label>What's name of your company ?</Form.Label>
                <Form.Control type="text" 
                              placeholder="Your name..." 
                              name="name"
                              value ={formCompany.name} 
                              onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput12">
                <Form.Label>What's your phone number ?</Form.Label>
                <Form.Control type="number" 
                              placeholder="Your phone number..."  
                              name="phoneNumber"
                              value ={formCompany.password} 
                              onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput13">
                <Form.Label>What's your e-mail ?</Form.Label>
                <Form.Control type="email" 
                              name="email"
                              placeholder="Your e-mail..." 
                              value={formCompany.email}
                              onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>About your sale?</Form.Label>
            <Form.Control type="text" 
                          placeholder="What time, kind of products..."  
                          name="sale"
                          value ={formCompany.sale} 
                          onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect12">
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
            <MapForm onDrag={getMarker} id="map-form-company"/>
            <Button variant="primary" type="submit">SEND <i className="fa fa-paper-plane" aria-hidden="true"></i></Button>
        </Form>
    );
};
export {
    FormJoinCompany
}

  


