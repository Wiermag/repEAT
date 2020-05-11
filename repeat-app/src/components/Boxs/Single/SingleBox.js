import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./SingleBox.css"
// import video from '../../../images/eat.mp4';

const SingleBox = (props) => {
    return (
        <Container className ="container-box">
            <Row >
                <Col xs={3}>
                    {props.children} 
                </Col>
                <Col>
                    <video autoPlay muted loop className="videoItem">
                        <source src={props.video} type='video/mp4' />
                    </video>
                </Col> 
            </Row>
        </Container>
    )
}
export {
    SingleBox
}



