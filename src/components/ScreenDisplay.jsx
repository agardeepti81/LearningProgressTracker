import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubjectScope from "./Subjectscope";
import SubjectCard from "./SubjectCard";
import TopicQuestions from "./TopicQuestions";

class ScreenDisplay extends Component {
  state = {
    loading: true,
    data: null,
    currentScope: null,
  };

  async componentDidMount() {
    const url = "/Data/Subjects/subjects.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
    console.log(data);
  }

  changeActiveScope = (scopeId) => {
    this.setState({ currentScope: scopeId });
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="mt-5 p-3">
            <Col className="bg-warning" md={{ span: 2 }}>
              <div>
                {this.state.loading || !this.state.data ? (
                  <div>loading... </div>
                ) : (
                  this.state.data.map((element) => (
                    <div>
                      <SubjectCard
                        subjectInfo={element}
                        changeActiveScope={this.changeActiveScope}
                      />
                    </div>
                  ))
                )}
              </div>
            </Col>
            <Col className="bg-danger" md={{ span: 9 }}>
              {/* <SubjectScope currentScope={this.state.currentScope} /> */}
              <TopicQuestions />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ScreenDisplay;
