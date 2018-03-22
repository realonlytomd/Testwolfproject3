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
    email: "",
    username: "",
    password: "",
    confirmpassword: ""
  };

  componentDidMount() {
   // this.loadUsers();
    const wow = new WOW.WOW();
    wow.init();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, email: "", username: "", password: "", confirmpassword: "" })
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
      API.saveUser({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
      API.getUserUsername({
        username: this.state.logusername
      })
        .then(res =>
          this.setState({ users: res.data, email: "", username: "", password: "", confirmpassword: ""})
        )
        .catch(err => console.log(err));
    };
      
        
        // {(this.state.logpassword === this.state.password) ? (
        //   this.setState({ users: res.data, email: "", username: "", password: "", confirmpassword: "" })
        // ) : (<h3>Wrong password</h3>)}
  

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="wow rubberBand" data-wow-delay="3.0s">User Login</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.logusername}
                onChange={this.handleInputChange}
                name="logusername"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.logpassword}
                onChange={this.handleInputChange}
                name="logpassword"
                placeholder="Password (required)"
              />
              {!(this.state.logusername && this.state.logpassword) ? (
                <FormBtn
                  disabled
                >
                  Fill in the Forms!
                </FormBtn>
                ) : (
                <FormBtnNo
                  onClick={this.handleFormSubmit2}
                >
                  Click to Login
                </FormBtnNo>
              )}
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="wow rubberBand" data-wow-delay="3.0s">Create New User</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password (required)"
              />
              <Input
                value={this.state.confirmpassword}
                onChange={this.handleInputChange}
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password (required)"
              />
              {!(this.state.email && this.state.username && this.state.password && this.state.confirmpassword) ? (
                  <FormBtn
                   disabled
                  >
                    Fill in the Forms!
                  </FormBtn>
                ) : (
                  !(this.state.password === this.state.confirmpassword) ? (
                    <FormBtn
                      disabled
                    >
                      Passwords Do Not Match!
                    </FormBtn>
                  ) : (
                  <FormBtnNo
                    onClick={this.handleFormSubmit}
                  >
                    Create New User
                  </FormBtnNo>
                )
              )}
            </form>
          </Col>
        </Row>
        <Row>
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