import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtnNo, FormBtn } from "../../components/Form";
import WOW from "wowjs";
import Nav from "../../components/Nav";

class Users extends Component {
  state = {
    users: [],
    username: "",
    password: ""
  };

  componentDidMount() {
    this.loadUsers();
    const wow = new WOW.WOW();
    wow.init();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, username: "", password: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
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
    if (this.state.username && this.state.password) {
      API.saveUser({
        username: this.state.username,
        password: this.state.password
        
      })
        .then(res => this.loadUsers())
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
              <h1 className="wow rubberBand" data-wow-delay="3.0s">User Login</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              {!(this.state.username && this.state.password) ? (
                <FormBtn
                  disabled
                >
                  Fill in the Forms!
                </FormBtn>
                ) : (
                <FormBtnNo
                  onClick={this.handleFormSubmit}
                >
                  Click to Login
                </FormBtnNo>
                )}
            </form>
          </Col>
          <Col size="md-8 sm-12 md-offset-2">
            {this.state.users.length ? (
              <Jumbotron>
                <h1 className="wow rubberBand" data-wow-delay="3.0s">Welcome</h1>
              </Jumbotron> 
            ) : (
              <h3></h3>
            )}
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <Link to={"/chores/"}>
                      <strong>
                        {user.username}, click here to create chores!
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 style={{ textAlign: 'center' }}>No User to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;