import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Cities from './Components/MarketCities';
import Trust from './Components/Trust';
import Policies from './Components/Policies';
import FAQs from './Components/FAQs';
import Contact from './Components/Contact';
import SignUpForm from './Components/SignUpForm';
import SignInForm from './Components/SignInForm';
import Logout from './Components/Logout';
import Profile from './Components/Profile';
import Error from './Components/Error';
import { admin } from './firebase';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// Initialize firestore
let db = admin.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      data: '',
    };

  }

  componentWillMount() {
    // lets us know whether the user is authenticated or not
    this.removeAuthListener = admin.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({authenticated: true, loading: false, data: 'arum.galadima@gmail.com'});

      } else {
        this.setState({authenticated: false, loading: false});
        //console.log('state in unmount:', this.state.authenticated);
      }
    });
  }

  componentDidMount(){
    admin.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({data: 'arum.galadima@gmail.com'});
        //console.log('will unmount:', this.state.data);
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header authenticated={this.state.authenticated} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/cities" component={Cities} />
            <Route path="/trust" component={Trust} />
            <Route path="/policies" component={Policies} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={SignInForm} />
            <Route path="/logout" component={Logout} />
            <Route data={this.state.data} path="/profile" component={Profile} />
            <Route component={Error} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
