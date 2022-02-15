import React, { Component } from 'react';

import swal from 'sweetalert';
const axios = require('axios');


export default class Dashboard extends Component {
  
  constructor()
  {
    super();
    this.state={token:'',name:' ',email:'',phone:'',address:'' , user_id : ''}
  }
  

  componentDidMount = () => {
    
    let user_id = localStorage.getItem('user_id');
    let token = localStorage.getItem('token')
    if (!user_id) {
      this.props.history.push('/login');
    } else {
      this.setState({ user_id: user_id , token : token }, () => {
        this.getUser();
      });
    }
  }
  getUser = () => {

    axios.get(`http://localhost:2000/get-user`, {
      headers: {
        'user_id': this.state.user_id,
        'token' : this.state.token
      }
    }, localStorage.getItem('user_id') , localStorage.getItem('token')
    ).then((res) => {
      console.log(res);
      this.setState({ name: res.data.name, email: res.data.email,phone: res.data.phone,address: res.data.address});
    }).catch((err) => {
      console.log(err)
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
      this.setState({ name:'null', email:'', phone: 0,address:'' },()=>{});
    });
  }
  render() {
    // const { } = ;
    return (
      <div className="container text-center mt-15">
        <div className="row">
          <div className="col-sm-12">
            <h4>
              Hey there, <b className="name-lable">{this.state.name}</b>
              <p className="mt-4">
                Your email {this.state.email} 
                <br></br>
                Your phone number {this.state.phone}
                <br></br>
                Your address {this.state.address}
               
              </p>
            </h4>
            
          </div>
        </div>
      </div>
    );
  }
}
