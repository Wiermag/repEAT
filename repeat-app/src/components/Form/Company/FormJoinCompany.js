import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./FormJoinCompany.css";
import { MapForm } from '../../Maps/MapForm/MapForm';
import { refFormCompany } from "../../../firebase";

const FormJoinCompany = () => {

    const saveFormCompany = () => {
    const newFormRef = refFormCompany.push();
    newFormRef.set(formCompany);
    };

    const[formCompany, setFormCompany] = useState({
        contact: {
            name: "",
            phone: "",
            email: "",
            info: "",
        },
        sale: {
            timeSale1:"",
            timeSale2: "",
            dateSale:"",
            aboutSale:"",
            discount:""
        },
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
                    contact: {
                        [name]: value,
                    },
                    sale: {
                        [name]: value,
                    },
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
        });
    }   

    return (
        <Form className="form" id="form-company"onSubmit={submit}>
            <div className="form-company-box">
                <h1>COMPANY: </h1>
                <Form.Group controlId="exampleForm.ControlInput11">
                    <Form.Label>What's name of your company ?</Form.Label>
                    <Form.Control type="text" 
                                placeholder="your name..." 
                                name="name"
                                value ={formCompany.contact.name} 
                                onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>What do you want to sale ?</Form.Label>
                <Form.Control type="text" 
                            placeholder="what do you have for me..."  
                            name="aboutSale"
                            value ={formCompany.sale.aboutSale} 
                            onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>When ?</Form.Label>
                    <Form.Control type="date" 
                                name="dateSale"
                                value ={ formCompany.sale.dateSale } 
                                onChange={ handleChange }/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Discount ?</Form.Label>
                    <Form.Control type="text" 
                                placeholder= "how big discount...?"  
                                name="discount"
                                value ={ formCompany.sale.discount } 
                                onChange={ handleChange }/>
                </Form.Group>
                <div className="box">
                    <h5 className="text-form">Time:</h5>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>from:</Form.Label>
                        <Form.Control type="time" 
                                        placeholder="what time...?"  
                                        name="timeSale1"
                                        value ={ formCompany.sale.timeSale1 } 
                                        onChange={ handleChange }/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>to:</Form.Label>
                        <Form.Control type="time"  
                                        name="timeSale2"
                                        value ={ formCompany.sale.timeSale2 } 
                                        onChange={ handleChange }/>
                    </Form.Group>  
                </div>
                <Form.Group controlId="exampleForm.ControlInput13">
                    <Form.Label>What's your e-mail ?</Form.Label>
                    <Form.Control type="email" 
                                name="email"
                                placeholder="your e-mail..." 
                                value={formCompany.contact.email}
                                onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput12">
                    <Form.Label>What's your phone number ?</Form.Label>
                    <Form.Control type="number" 
                                placeholder="your phone number..."  
                                name="phone"
                                value ={formCompany.contact.phone} 
                                onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect12">
                <Form.Label>How did you know about Us ?</Form.Label>
                <Form.Control   as="select" 
                                name="info"
                                onChange={handleChange}>
                    <option>Choose...</option>
                    <option>Facebook</option>
                    <option>Friends</option>
                    <option>Instagram</option>
                    <option>Other...</option>
            </Form.Control>
            </Form.Group>
            </div>
            <MapForm className="form-company-map" 
                     onDrag={getMarker} 
                     id="map-form-company"/> 
            <Button className="form-company-button" 
                    variant="warning" 
                    type="submit">SEND <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </Button>
        </Form>
    );
};

export {
    FormJoinCompany
}

  


