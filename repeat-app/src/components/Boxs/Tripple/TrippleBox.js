import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TrippleBox.css"

const TrippleBox = (props) => {
    //Komponent dla trzech boxów;
    return (
        <Container>
            <Row className="trippleContainer">
                <Col>
                    <div className="trippleBox"></div>
                </Col>
                <Col xs={6}>
                    <div className="trippleBox firstBox-img-middle"></div>
                </Col>
                <Col xs={4}>
                    <div className="trippleBox firstBox-img-right">
                        {props.textRight}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export {
    TrippleBox
}