import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchData from "./FetchData";
import SubjectPicker from "./subjectPicker";

class ScreenDisplay extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="mt-5 p-3">
            <Col className="bg-warning" md={{ span: 3 }}>
                <FetchData />
            </Col>
            <Col className="bg-danger" md={{ span: 9 }}>
              will display subject
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ScreenDisplay;
