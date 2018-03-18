import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class DetailUser extends Component {
  state = {
    user: {}
  };
  // When this component mounts, grab the user with the _id of this.props.match.params.id
  
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
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
                {this.state.user.username}: {this.state.user.password}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Login</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DetailUser;