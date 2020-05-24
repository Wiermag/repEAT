import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import "./FormJoin.css";


const FormJoin = () => {

    const[newForm, setNewForm] = useState({
      name: "",
      password: "",
      mail: "",
    });


  return (
    <Form className="form" onSubmit={ e => e.preventDefault()}>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>What's your name ?</Form.Label>
            <Form.Control type="text" 
                          placeholder="Your name..." 
                          value ={newForm.name} 
                          onChange={e => setNewForm(e.preventDefault())}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>What's your password ?</Form.Label>
            <Form.Control type="password" 
                          placeholder="Your password"  
                          value ={newForm.password} 
                          onChange={e => setNewForm(e.preventDefault())}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>What's your e-mail ?</Form.Label>
            <Form.Control type="email" 
                          name="name"
                          placeholder="Your e-mail..." 
                          value={newForm.mail}
                          onChange={e => setNewForm(e.preventDefault())}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How did you know about Us ?</Form.Label>
            <Form.Control as="select">
                <option>Facebook</option>
                <option>Friends</option>
                <option>Instagram</option>
                <option>Other</option>
        </Form.Control>
        </Form.Group>
    <button onClick={handleSend} type="submit">SEND</button>
  </Form>
  );
};

export {
    FormJoin
};