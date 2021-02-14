import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.css';
import Profile from '../../assets/img/profile/fypms.jpg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
const About = () => {
  return (
    <div>
      <div className="about">
        <Tilt options={{ max: 25 }}>
          <Card>
            <Container className="firstContainer">
              <h1 className="title1">About me</h1>
              <Row className="pic_text pt-3 pb-3">
                <Col xs={12} md={6}>
                  <Row className="justify-content-center mb-2">
                    <Image
                      className="profile justify-content-end"
                      alt="profile"
                      src={Profile}
                      thumbnail
                      fluid
                    />
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row className=" my-details align-items-start  rounded">
                    Hi! I am <strong>&nbsp; Aayush Shrestha</strong>
                    <br />
                    I’m an undergraduate student at the Hong Kong University of
                    Science and Technology, studying Computer Engineer.
                    <Col className="d-flex justify-content-center flex-wrap"></Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card>
        </Tilt>
      </div>
    </div>
  );
};

export default About;
