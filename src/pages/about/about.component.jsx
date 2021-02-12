import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.css';
import Profile from '../../assets/img/profile/fypms.jpg';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Container className="firstContainer">
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
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
              <Row className=" align-items-start p-2 my-details rounded">
                Hi! I am <strong>&nbsp; Aayush Shrestha</strong>
                <br />
                I’m an undergraduate student at the Hong Kong University of
                Science and Technology, studying Computer Engineer.
                <Col className="d-flex justify-content-center flex-wrap"></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
