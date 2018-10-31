import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { admin } from '../firebase.js';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            redirect: false,
            loading: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signin = this.signin.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);
        // this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;

      this.setState({
        [name]: value
      });
    }

    signin(e){
      e.preventDefault();
      admin.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user, error) => {
        if (user) {
          this.setState({redirect: true, loading: false});
          console.log('state in redirect:', this.state.redirect);
        } else {
          console.log(error);
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      this.signin(e);
      console.log('The form was submitted with the following data:');
      // console.log(this.state);
    }

    render() {
      if(this.state.redirect === true) {
        return <Redirect to='/profile' />
      }
      return (
      <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
              <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>

            <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
            </div>
          </form>
        </div>
      );
    }
}

export default SignInForm;
