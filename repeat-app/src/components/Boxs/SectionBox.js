import React from "react";
import video from '../../images/eat.mp4';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const VideoItem = () => {
    return (
        <video autoPlay muted loop className="videoItem">
            <source src={video} type='video/mp4' />
        </video>
    )
}
const SectionBox = (props) => {
    return (
        <Container className ="container-box">
            <Row >
                <Col xs={3}>
                    {props.children} 
                </Col>
                <Col>
                    <VideoItem/>
                </Col> 
            </Row>
        </Container>
    )
}
export {
    SectionBox
}


// const VideoItem = (props) => {
//     return (
//             <video autoPlay muted loop className="videoItem">
//                 <source src={props.video} type='video/mp4' />
//             </video>
//     )
// }

//PROPSY OSOBNY KOMPONENT VIDEOITEM;
//USUWANIE STYLI Z GOTOWYCH IMPORTOWANYCH KOMPONENTÓW;

