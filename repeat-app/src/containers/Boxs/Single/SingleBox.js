import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./SingleBox.css";


const SingleBox = (props) => {
    return (
        <Container className= {`container-box`}>
            <Row className= {`${props.classReverseSingle}`}>
                <Col xs={4}>
                    { props.children } 
                </Col>
                <Col>
                    <video autoPlay muted loop className="videoItem videoBox">
                        <source src={props.video} type='video/mp4' />
                    </video>
                </Col> 
            </Row>
        </Container>
    );
};
export {
    SingleBox
}



