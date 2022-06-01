import React, { Component } from "react";
import { Card, ProgressBar } from "react-bootstrap";

class TopicTiles extends Component {

  render() {
    const percentage = 59;
    return (
      <Card className="cardstyle" style={{ width: "10rem", height:"10rem", textAlign: "center", margin: "5px"}}>
        <Card.Body>
          <Card.Title className="subjectTitle">{this.props.topic}</Card.Title>
          {`${percentage}% completed`}
          <ProgressBar variant="success" now={percentage} animated />
        </Card.Body>
      </Card>
    );
  }
}

export default TopicTiles;
