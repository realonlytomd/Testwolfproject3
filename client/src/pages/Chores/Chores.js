import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtnNo, FormBtn } from "../../components/Form";
import CompleteBtn from "../../components/CompleteBtn";
import WOW from "wowjs";
import Nav from "../../components/Nav";

class Chores extends Component {
  state = {
    chores: [],
    title: "",
    kid: "",
    reward: ""
  };

  componentDidMount() {
    this.loadChores();
    const wow = new WOW.WOW();
    wow.init();
  }

  loadChores = () => {
    API.getChores()
      .then(res =>
        this.setState({ chores: res.data, title: "", kid: "", reward: "" })
      )
      .catch(err => console.log(err));
  };

  deleteAchore = id => {
    API.deleteChore(id)
      .then(res => this.loadChores())
      .catch(err => console.log(err));
  };

  // add function for complete chore button
  completeChore = id => {
    API.saveChore(id)
      .then(res => this.loadChores())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.kid) {
      API.saveChore({
        title: this.state.title,
        kid: this.state.kid,
        reward: this.state.reward
      })
        .then(res => this.loadChores())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-6 md-offset-3">
            <Jumbotron>
              <h1 className="wow slideInRight" data-wow-delay="1.0s">Create a Chore</h1>
              <p className="wow pulse infinite" data-wow-delay="5.0s">Enter the chore, who's responsible, and their reward.</p>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Name of Chore (required)"
              />
              <Input
                value={this.state.kid}
                onChange={this.handleInputChange}
                name="kid"
                placeholder="Child (required)"
              />
              <TextArea
                value={this.state.reward}
                onChange={this.handleInputChange}
                name="reward"
                placeholder="Reward (Points or Tangible)"
              />
              {!(this.state.title && this.state.kid) ? (
                <FormBtn
                  disabled
                >
                  Fill in the Form!
                </FormBtn>
                ) : (
                <FormBtnNo
                  onClick={this.handleFormSubmit}
                >
                  Click to Submit Chore
                </FormBtnNo>
                )}
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-8 sm-12 md-offset-2">
            <Jumbotron>
              <h1 className="wow slideInRight" data-wow-delay="1.0s">Chores to Complete</h1>
            </Jumbotron>
            {this.state.chores.length ? (
              <List>
                {this.state.chores.map(chore => (
                  <ListItem key={chore._id}>
                    <Link to={"/chores/" + chore._id}>
                      <strong>
                        {chore.kid}: {chore.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteAchore(chore._id)} />
                    <CompleteBtn onClick={() => this.completeChore(chore._id)} /> 
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Chores to Do</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chores;
