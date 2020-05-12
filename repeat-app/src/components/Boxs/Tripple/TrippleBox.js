import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TrippleBox.css"

const TrippleBox = (props) => {
    return (
        <Container>
            <Row className={`trippleContainer ${props.classReverseTripple}`} style={{backgroundColor: props.bckColor}}>
              
                <Col>
                    <div className={`trippleBox ${props.classLeftBox}`}></div>
                </Col>
                <Col xs={6}>
                    <div className={`trippleBox ${props.classMiddleBox}`}>
                        <img src={props.imageURL} alt="dinner"/>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className={`trippleBox ${props.classRightBox}`}>
                       <p>{props.textRight}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export {
    TrippleBox
}