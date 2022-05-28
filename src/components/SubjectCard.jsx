import React, { Component } from 'react';
import { Card, Button, SplitButton } from "react-bootstrap";

class SubjectCard extends Component {

    render() { 
        return (
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{this.props.subject}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          );
    }
}
 
export default SubjectCard;