import React, { Component } from "react";
import { Card, Button, SplitButton } from "react-bootstrap";

class TopicTiles extends Component {
  render() {
    return (
      <Card style={{ width: "10rem", height:"10rem", textAlign: "center", margin: "5px"}}>
        <Card.Body>
          <Card.Title className="subjectTitle">{this.props.topic}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default TopicTiles;
