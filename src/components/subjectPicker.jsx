import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";


class SubjectPicker extends Component {
  state = {
        subject: null,
    };

  async componentDidMount() {
      console.log('called componentdidMount');
      const url = "/Data/Subjects/subjects.json";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({subject: data});
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          {!this.state.subject ? <div>loading... </div> : (<div><div>{this.state.subject[0].name}</div> 
            <div>{this.state.subject[1].name}</div>
            <div>{this.state.subject[2].name}</div> 
            <div>{this.state.subject[3].name}</div></div>)
          }
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SubjectPicker;
