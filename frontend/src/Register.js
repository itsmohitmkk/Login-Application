import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
const axios = require('axios');

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      firstName : '',
      lastName : '',
      address : '',
      phone : '',
      email : '',
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {

    axios.post('http://localhost:2000/register', {
      username: this.state.username,
      password: this.state.password,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      address : this.state.address,
      phone : this.state.phone,
      email : this.state.email
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      this.props.history.push('/');
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
    });
  }

  render() {
    return (
      <div style={{ marginTop: '200px' }}>
        <div>
          <h2>Register</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.onChange}
            placeholder="Confirm Password"
            required
          />
          <br /><br />

          <TextField
            id="standard-basic"
            type="firstName"
            autoComplete="off"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
            placeholder="Enter firstname"
            required
          />
          <br /><br />

          <TextField
            id="standard-basic"
            type="lastName"
            autoComplete="off"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
            placeholder="Enter LastName"
            required
          />
          <br /><br />

          <TextField
            id="standard-basic"
            type="address"
            autoComplete="off"
            name="address"
            value={this.state.address}
            onChange={this.onChange}
            placeholder="Enter Address"
            required
          />
          <br /><br />

          <TextField
            id="standard-basic"
            type="phone"
            autoComplete="off"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}
            placeholder="Enter Phone no"
            required
          />
          <br /><br />

          <TextField
            id="standard-basic"
            type="email"
            autoComplete="off"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Enter Email Address"
            required
          />
          <br /><br />

          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == '' && this.state.firstName == '' && this.state.lastName == '' && this.state.email == '' && this.state.address == '' }
            onClick={this.register}
          >
            Register
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/">
            Login
          </Link>
        </div>
      </div>
    );
  }
}
