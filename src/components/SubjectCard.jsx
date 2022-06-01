import React, { Component } from "react";
import { Card, Button, SplitButton } from "react-bootstrap";

class SubjectCard extends Component {
  render() {
    return (
      <Card
        className="mt-2 m-1"
        style={{ width: "13rem", textAlign: "center" }}
      >
        <Card.Img
          className="subjectLogo"
          variant="top"
          src={this.props.subjectInfo.logo}
        />
        <Card.Body>
          <Card.Title className="subjectTitle">
            {this.props.subjectInfo.name}
          </Card.Title>
          <Button
            variant="primary"
            onClick={() => {
              this.props.changeActiveScope(this.props.subjectInfo.id);
            }}
          >
            Check Scope
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SubjectCard;
