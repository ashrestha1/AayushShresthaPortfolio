import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './contact-form.styles.css';
import '../about/hover.css';

const ContactForm = () => {
  return (
    <div id="contact">
      <Row>
        <Col className="d-flex justify-content-center flex-wrap">
          <div className="m-2">
            <a
              href="mailto:aayush.shrestha.hk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hvr-icon-wobble-vertical"
            >
              <Button title="aayush.shrestha.hk@gmail.com">
                <i className="fa fa-envelope fa-2x hvr-icon"></i>
              </Button>
            </a>
          </div>

          <div className="m-2">
            <a
              href="https://github.com/ashrestha1"
              target="_blank"
              rel="noopener noreferrer"
              class="hvr-icon-wobble-vertical"
            >
              <Button title="My other projects">
                <i className="fab fa-github fa-2x hvr-icon"></i>
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
