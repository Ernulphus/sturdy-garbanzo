import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';

import Credits from './components/Credits';
import Debits from './components/Debits';

import './App.css';
import axios from 'axios';
import nextId from "react-id-generator";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96'
      },
      debits: [],
      credits: []
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  //
  addCredit = (cred) => {
    cred.preventDefault();

    const description = cred.target[0].value;
    const amount = Number(cred.target[1].value);
    let id = nextId();
    let newDate = new Date();
    newDate = newDate.toISOString().split('T')[0];
    const newCred = {
      id: id,
      amount: amount,
      date: newDate,
      description: description
    };

    this.setState((state, props) => {
      return {credits: [...state.credits, newCred]}
    });
  }

  addDebit = (deb) => {
    deb.preventDefault();

    const description = deb.target[0].value;
    const amount = Number(deb.target[1].value);
    let id = nextId();
    let newDate = new Date();
    newDate = newDate.toISOString().split('T')[0];
    const newDeb = {
      id: id,
      amount: amount,
      date: newDate,
      description: description
    };

    this.setState((state, props) => {
      return {debits: [...state.debits, newDeb]}
    });
  }

  // Request credits and debits from the API and put them in the starting debits and credits arrays
  componentDidMount = async () => {
    let linkToDebits = "https://moj-api.herokuapp.com/debits";
    let linkToCredits = "https://moj-api.herokuapp.com/credits";

    // Source for rounding to two decimal places: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

    // Call debits, and add each one to the debits list
    try
    {
      let debs = await axios.get(linkToDebits);
      let debt = 0;
      debs.data.forEach(deb => {
        debt += deb.amount;
      });
      this.setState({
        accountBalance: Math.round((this.state.accountBalance - debt + Number.EPSILON) * 100) / 100,
        debits: debs.data
      });
    }
    catch (error){
      if (error.response)
      {
          console.log(error.response.data);
          console.log(error.response.status);
      }
    }

    // Call credits, and add each one to the credits list
    try
    {
      let creds = await axios.get(linkToCredits);
      let credt = 0;
      creds.data.forEach(cred => {
        credt += cred.amount;
      });
      this.setState({
        accountBalance: Math.round((this.state.accountBalance + credt + Number.EPSILON) * 100) / 100,
        credits: creds.data
      });
    }
    catch (error){
      if (error.response)
      {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    }

  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={this.state.credits} />)
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={this.state.debits} />)

    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path = "/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </div>
      </Router>
    );
  }

}

export default App;