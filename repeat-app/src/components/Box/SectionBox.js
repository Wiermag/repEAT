import React from "react";
import videoUrl from '../../images/eat.mp4';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VideoItem = () => {
    return (
            <video autoPlay muted loop className="videoItem">
                <source src={videoUrl} type='video/mp4' />
            </video>
    )
}

const SectionBox = () => {

    return (
        <Container className ="container-box">
            <Row >
                <Col xs={3}> 
                    <div className="section-box-content">
                        <h1 href="index.html" className="logo">repEAT</h1>
                        <nav>Nawigacja</nav>
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                    </div>
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