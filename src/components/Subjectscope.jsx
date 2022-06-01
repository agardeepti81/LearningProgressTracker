import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopicTiles from "./TopicTiles";

class SubjectScope extends Component {
  state = { categories: null, loading: true };

  async componentDidUpdate() {
    const url = `/Data/Subjects/${this.props.currentScope}/topics.json`;
    const response = await fetch(url);
    const data = await response.json();
    let categories = {};

    data.forEach((topic) => {
      if (!(topic.category in categories)) 
      categories[topic.category] = [];

      categories[topic.category].push(topic.name);
    });

    this.setState({ categories: categories, 
                    loading: false });
    console.log(categories);
  }

  renderCategory() {
    const categoriesHTML = [];
    for (const category in this.state.categories) {
      categoriesHTML.push(
        <div>
          <Container fluid>
            <Row
              className="bg-primary p-3 m-5"
              style={{fontSize: "15pt", fontWeight: "bold", textAlign: "center"}}
            >
            {category.toUpperCase()}
           
            <Col className="bg-info" md={{ span: 12 }}
                style={{fontSize: "10pt", textAlign: "center", margin: "3pt", marginTop:"5pt"}}>
              {this.state.categories[category].map((element) => (
                <TopicTiles topic={element}/>
              ))}
            </Col>
            </Row>
          </Container>
        </div>
      );
    }

    return categoriesHTML;
  }

  render() {
    console.log(this.props.currentScope)
    if(!this.props.currentScope)
      return <div>Please click on subject to view scope</div>
    return (
      <div>
        {this.state.loading || !this.state.categories ? (
          <div>loading... </div>
        ) : (
          <div>{this.renderCategory()}</div>
        )}
      </div>
    );
  }
}

export default SubjectScope;
