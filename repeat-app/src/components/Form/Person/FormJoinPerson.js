import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./FormJoinPerson.css";
import { MapForm } from '../../Maps/MapForm/MapForm';
import { refFormPerson } from "../../../firebase";

const FormJoinPerson = () => {

    const saveFormPerson = () => {
        const newFormRef = refFormPerson.push();
        newFormRef.set(formPerson);
    };
    
    const[formPerson, setFormPerson] = useState({
      contact: {
        name: "",
        email: "",
        phone:"",
        info: "",
      },
      sale:{
        timeSale1: "",
        timeSale2: "",
        dateSale: "",
        aboutSale:"",
        discount:"",
      },
      position: {
        lat: 0,
        lng: 0
      }
    });

    const submit = (e) => {
      e.preventDefault();
      saveFormPerson();
    }; 
    
    const handleChange = (e) => {
        const {  name, value } = e.target;
        return (
            setFormPerson( (prevState) => {
              return {
                  ...prevState, 
                   contact: {
                   [name]: value,
                  },
                  sale: {
                    [name]: value,
                  },
                  [name]: value,
              }
            })
        )
    };   

    const getMarker = positionData => {
      setFormPerson( (prevState) => {
        return {
            ...prevState, 
            position: positionData,
        }
      })
    };
  
  return (
    <Form className="form" id="form-person" onSubmit={ submit }>
        <h1>PRIVATE PERSON: </h1>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>What's your name ?</Form.Label>
            <Form.Control type="text" 
                          placeholder="Your name..." 
                          name="name"
                          value ={ formPerson.contact.name } 
                          onChange={ handleChange }/>
        </Form.Group>     
        <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>What do you want to sell ?</Form.Label>
            <Form.Control type="text" 
                          placeholder="what do you have for me... ?"  
                          name="aboutSale"
                          value ={ formPerson.sale.aboutSale } 
                          onChange={ handleChange }/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Discount ?</Form.Label>
            <Form.Control type="text" 
                          placeholder= "How big discount...?"  
                          name="discount"
                          value ={ formPerson.sale.discount } 
                          onChange={ handleChange }/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>When ?</Form.Label>
            <Form.Control type="date" 
                          name="dateSale"
                          value ={ formPerson.sale.dateSale } 
                          onChange={ handleChange }/>
        </Form.Group>
        <div className="box">
          <h5 className="text-form">Time:</h5>
          <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>from:</Form.Label>
              <Form.Control type="time" 
                            placeholder="What time...?"  
                            name="timeSale1"
                            value ={ formPerson.sale.timeSale1 } 
                            onChange={ handleChange }/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>to:</Form.Label>
              <Form.Control type="time"  
                            name="timeSale2"
                            value ={ formPerson.sale.timeSale2 } 
                            onChange={ handleChange }/>
          </Form.Group>  
        </div>
        <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>What's your e-mail ?</Form.Label>
            <Form.Control type="email" 
                          name="email"
                          placeholder="Your e-mail..." 
                          value={ formPerson.contact.email }
                          onChange={ handleChange }/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>What's your phone number ?</Form.Label>
            <Form.Control type="number" 
                          name="phone"
                          placeholder="Your phone number..." 
                          value={ formPerson.contact.phone }
                          onChange={ handleChange }/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How did you know about Us ?</Form.Label>
            <Form.Control as="select" 
                          name="info"
                          onChange={ handleChange }>
                <option>Choose...</option>
                <option>Facebook</option>
                <option>Friends</option>
                <option>Instagram</option>
                <option>Other...</option>
        </Form.Control>
        </Form.Group>
        <MapForm onDrag={ getMarker } id="map-form-person"/>
        <Button variant="primary" type="submit">SEND <i className="fa fa-paper-plane" aria-hidden="true"></i></Button>
    </Form>
  );
};

export {
    FormJoinPerson
};