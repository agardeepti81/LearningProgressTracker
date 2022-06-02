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
    viewTopic: false,
    activeTopicId: false,
  };

  async componentDidMount() {
    const url = "/Data/Subjects/subjects.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data, loading: false });
    console.log(data);
  }

  changeActiveScope = (scopeId) => {
    this.setState({
      currentScope: scopeId,
      viewTopic: false,
    });
  };

  changeTopicView = (topicId) => {
    this.setState({
      activeTopicId: topicId,
    });
    this.toggleTopicView();
  };

  toggleTopicView = () => {
    this.setState({ viewTopic: !this.state.viewTopic });
  };

  render() {
    if (this.state.loading || !this.state.data) return <div>loading...</div>;

    return (
      <div id="scope-window">
        <div id="scopeSelection">
          {this.state.data.map((element) => (
            <SubjectCard
              subjectInfo={element}
              changeActiveScope={this.changeActiveScope}
            />
          ))}
        </div>
        <div id="scopeView">
          {this.state.viewTopic ? (
            <TopicQuestions
              activeTopicId={this.state.activeTopicId}
              currentScope={this.state.currentScope}
              back={this.toggleTopicView}
            />
          ) : (
            <SubjectScope
              currentScope={this.state.currentScope}
              changeTopicView={this.changeTopicView}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ScreenDisplay;
