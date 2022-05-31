import React, { Component } from 'react';
import { Card, Button, SplitButton } from "react-bootstrap";

class SubjectCard extends Component {

    render() { 
        return (
            <Card style={{ width: "13rem", textAlign: "center", margin:"3px" }}>
            <Card.Img className="subjectLogo" variant="top" src={this.props.logo} />
            <Card.Body>
              <Card.Title className="subjectTitle">{this.props.subject}</Card.Title>
              <Button variant="primary">Check Scope</Button>
            </Card.Body>
          </Card>
          );
    }
}
 
export default SubjectCard;