import React from "react";
import { Container, Row, Col }from "react-bootstrap";
import "./TrippleBox.css"

const TrippleBox = (props) => {
    return (
        <Container>
            <Row className={`trippleContainer ${props.classReverseTripple}`} style={{backgroundColor: props.bckColor}}>
              
                <Col>
                    <div className={`trippleBox ${props.classLeftBox}`}>
                         <p>{props.textLeft}</p>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className={`trippleBox ${props.classMiddleBox}`}>
                        <img src={props.imageURL} alt="image"/>
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
};

export {
    TrippleBox
}