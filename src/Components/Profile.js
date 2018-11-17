import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Bottom from './Bottom';
import {admin} from '../firebase.js';

// Initialize firestore
let db = admin.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: '',
          fname: '',
          lname: '',
          address: '',
          phonenumber: '',
          useremails: '',
          userpassword: '',
          userfname: '',
          userlname: '',
          useraddress: '',
          userphonenumber: '',
          usercreditcard: '',
          userbilling: '',
          currentUserEmail: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;

      this.setState({
        [name]: value,
      });
    }

    componentWillMount() {
      // get current user email address
      //this.getData = admin.auth().currentUser.email;
      // let currUsrEmail;
      //
      // if (currUser != null) {
      //   currUsrEmail = currUser.email;
      //   console.log('from profile:', currUsrEmail);
      // }

      // get data from firestore
      let currentUserData = db.collection('userData').doc('arum.galadima@gmail.com');
      this.retrieveData = currentUserData.get().then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            //console.log('Document data:', doc.data());
            this.setState(
              {
                useremails: doc.data().email,
                userfname: doc.data().fname,
                userlname: doc.data().lname,
                useraddress: doc.data().address,
                userphonenumber: doc.data().phonenumber,
                usercreditcard: doc.data().creditcard,
                userbilling: doc.data().billing
              });
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });
    }
    componentWillUnmount() {
      this.getData();
      this.retrieveData();
    }

    handleSubmit(e) {
      e.preventDefault();
      //on submit, set data in firebase equal to this new data
    }

    render() {
        return (
          <div>
            <form className="one-row profile-page-form">
              <input className="searchURL" type="text" name="searchURL" placeholder="Paste a Craigslist link here" />
              <span>|</span>
              <input className="maxPrice" type="number" name="maxPrice" placeholder="Max Price" />
              <input type="image" alt="background image" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png" className="button-search" />
            </form>
            <Row>
              <Col xs={12} md={6}>
                <div className="profile-form">
                  <form onSubmit={this.handleSubmit} className="FormFields">
                    <h3 className="account-header">Account Information</h3>
                    <div className="contact-info">
                      <div className="FormField">
                      <h4 className="profile-sec-header">Contact</h4>
                        <label className="FormField__Label prof-label" htmlFor="fname">First Name</label>
                        <input type="text" id="name" className="profile-input" placeholder={this.state.userfname} name="fname" value={this.state.fname} onChange={this.handleChange} />
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label prof-label" htmlFor="lname">Last Name</label>
                        <input type="text" className="profile-input" placeholder={this.state.userlname} name="lname" value={this.state.lname} onChange={this.handleChange} />
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label prof-label" htmlFor="password">Password</label>
                        <input type="password" className="profile-input" placeholder="Change your password" name="password" value={this.state.password} onChange={this.handleChange} />
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label prof-label" htmlFor="address">Mailing Address</label>
                        <input type="text" className="profile-input" placeholder={this.state.useraddress} name="address" value={this.state.address} onChange={this.handleChange} />
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label prof-label" htmlFor="email">Email</label>
                        <input type="email" className="profile-input" placeholder={this.state.useremails} name="email" value={this.state.email} onChange={this.handleChange} />
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label prof-label" htmlFor="phonenumber">Mobile Number</label>
                        <input type="tel" className="profile-input" placeholder={this.state.userphonenumber} name="phonenumber" value={this.state.phonenumber} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="payment-info">
                      <h4 className="profile-sec-header">Payment</h4>
                        <div className="FormField">
                          <label className="FormField__Label prof-label" htmlFor="creditcard">Credit Card</label>
                          <input type="number" className="profile-input" placeholder="Update Credit/Debit Card" name="creditcard" value={this.state.phonenumber} onChange={this.handleChange} />
                        </div>
                        <div className="FormField">
                          <label className="FormField__Label prof-label" htmlFor="email">Billing Address</label>
                          <input type="text" className="profile-input" placeholder={this.state.userbilling} name="billingaddress" value={this.state.phonenumber} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Save Changes</button>
                    </div>
                  </form>
                </div>
              </Col>
              <Col xs={12} md={6} className="account-details">
              <div className="account-prof-sec">
                <h3 className="account-header">Account Details</h3>
                <h4 className="profile-sec-header">Search History</h4>
                <p>Click here to download your search history with Bypert</p>
                <br />
                <h4 className="profile-sec-header">Purchase History</h4>
                <p>Click here to download your purchase history with Bypert</p>
              </div>
              </Col>
            </Row>
            <div className="bottom-body">
              <Bottom />
            </div>
          </div>
        );
    }
}
export default Profile;
