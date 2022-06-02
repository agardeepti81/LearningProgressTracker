import React, { Component } from "react";
import { Table , Button} from "react-bootstrap";
import SubjectScope from "./Subjectscope";

class TopicQuestions extends Component {
  state = { data: null, loading: true };

  async componentDidMount() {
    const url = "/Data/Subjects/c++/singleandmultipleinheritance.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
    console.log(data);
  }

  render() {
    console.log(this.props.activeTopicId);
    console.log(this.props.viewTopic);
    return this.state.loading || !this.state.data ? (<div>loading... </div>) : 
    (
      <div className="questionTable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> </th>
              <th>Q-ID</th>
              <th>Questions</th>
            </tr>
          </thead>
          <tbody>
        {this.state.data.map((qus, i) => 
            <tr>
            <td><input type="checkbox"></input></td>
            <td>{i+1}</td>
            <td>{qus}</td>
            </tr> )}
          </tbody>
        </Table>
        <Button>back</Button>
      </div>
    );
  }
}

export default TopicQuestions;
