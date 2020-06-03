import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import "./FormJoinPerson.css";
import Button from 'react-bootstrap/Button';



const FormJoinPerson = () => {
  //FIREBASE:
    const firebaseFold = require('firebase/app');
                         require('firebase/auth');
                         require('firebase/database');
                 
    const db = firebaseFold.database().ref('person');
    const saveFormPerson = () => {
        const newFormRef = db.push();
        newFormRef.set(formPerson);
    };
    
    const[formPerson, setFormPerson] = useState({
      name: "",
      password: "",
      email: "",
      info: "",
    });

    const submit = (e) => {
      e.preventDefault();
      saveFormPerson();
    }; 
    
    const handleChange = (e) => {
      const {  name, value } = e.target;
      return  (
        setFormPerson( () => {
            return {
                ...formPerson, 
                [name]: value,
            }
          })
      );
    };   
  
  return (
    <Form className="form" id="form-person" onSubmit={submit}>
         <h1>Add your account:</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>What's your name ?</Form.Label>
            <Form.Control type="text" 
                          placeholder="Your name..." 
                          name="name"
                          value ={formPerson.name} 
                          onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>About your sale?</Form.Label>
            <Form.Control type="text" 
                          placeholder="What time, kind of products..."  
                          name="sale"
                          value ={formPerson.sale} 
                          onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>What's your e-mail ?</Form.Label>
            <Form.Control type="email" 
                          name="email"
                          placeholder="Your e-mail..." 
                          value={formPerson.email}
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
    <Button variant="primary" type="submit">SEND <i class="fa fa-paper-plane" aria-hidden="true"></i></Button>
  </Form>
  );
};

export {
    FormJoinPerson
};