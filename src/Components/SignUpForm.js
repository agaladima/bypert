import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { admin } from '../firebase.js';
import * as functions from 'firebase-functions';

// Initialize firestore
let db = admin.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

// const timestamp = snapshot.get('created_at');
// const date = timestamp.toDate();

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            address: '',
            phonenumber: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signup = this.signup.bind(this);
        this.addCollection = this.addCollection.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value,
        });
    }

    addCollection(){
      db.collection('userData').doc(this.state.email).set({
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        address: this.state.address,
        phonenumber: this.state.phonenumber,
        hasAgreed: this.state.hasAgreed,
        creditcard: '',
        billing: ''
      })
      .then(function(){
        console.log('Document successfully written.');
      })
      .catch(function(error){
        console.error('Error writing document: ', error);
      });
    }

    signup(e){
      e.preventDefault();
      this.addCollection();

      admin.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(user) {
        window.location = "/profile";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
         alert('The password is too weak.');
       } else {
         alert(errorMessage);
       }
       console.log(error);
      });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.signup(e)
        console.log('The form was submitted with the following data:');
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="fname">First Name</label>
                <input type="text" id="fname" className="FormField__Input" placeholder="Enter your first name" name="fname" value={this.state.fname} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Last Name</label>
                <input type="text" id="lname" className="FormField__Input" placeholder="Enter your last name" name="lname" value={this.state.lname} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="address">Mailing Address</label>
                <input type="text" id="address" className="FormField__Input" placeholder="Enter your address" name="address" value={this.state.address} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Email</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Mobile Number</label>
                <input type="tel" id="phonenumber" className="FormField__Input" placeholder="Enter your mobile number" name="phonenumber" value={this.state.phonenumber} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="/" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/login" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;
