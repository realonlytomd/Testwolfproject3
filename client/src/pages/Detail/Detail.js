import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Detail extends Component {
  state = {
    chore: {}
  };
  // When this component mounts, grab the chore with the _id of this.props.match.params.id
  
  componentDidMount() {
    API.getChore(this.props.match.params.id)
      .then(res => this.setState({ chore: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-10 md-offset-1">
            <Jumbotron>
              <h1>
                {this.state.chore.kid}: {this.state.chore.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 md-offset-2">
            <Jumbotron>
              <h2>Reward:</h2>
              <h2>
                {this.state.chore.reward}
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-4">
            <Jumbotron>
              <h2>Date Assigned:</h2>
              <h2>
                {String(this.state.chore.date).slice(0, 10)}
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/Chores">← Back to Chores</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
