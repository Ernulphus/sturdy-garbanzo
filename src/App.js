import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';

import Credits from './components/Credits';
import Debits from './components/Debits';
import Header from './components/Header';
import AccountBalance from './components/AccountBalance';

import './App.css';
import axios from 'axios';
import nextId from "react-id-generator";

// Source for rounding to two decimal places: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

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

  // Run after submitting a new credit form
  addCredit = (cred) => {
    cred.preventDefault();

    // Gather information about the new credit
    const description = cred.target[0].value;
    const amount = parseFloat(cred.target[1].value);
    if (isNaN(amount)) {console.log("bad input"); return;} // Return if ill-formatted value

    let id = nextId();      // Using react-id-generator which I found online
    let newDate = new Date();
    newDate = newDate.toISOString().split('T')[0]; // Source: https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd

    // Create new credit object to add to the list
    const newCred = {
      id: id,
      amount: amount,
      date: newDate,
      description: description
    };

    // Add new credit and update account balance
    this.setState((state, props) => {
      return {
        credits: [...state.credits, newCred],
        accountBalance : Math.round((this.state.accountBalance + amount + Number.EPSILON) * 100) / 100,
      }
    });
  }

  // Run after submitting a new debit form, similar to addCredit
  addDebit = (deb) => {
    deb.preventDefault();

    const description = deb.target[0].value;
    const amount = parseFloat(deb.target[1].value);
    if (isNaN(amount)) {console.log("bad input"); return;} // Return if ill-formatted value

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
      return {
        debits: [...state.debits, newDeb],
        accountBalance : Math.round((this.state.accountBalance - amount + Number.EPSILON) * 100) / 100,
      }
    });
  }

  // Request credits and debits from the API and put them in the starting debits and credits arrays
  componentDidMount = async () => {
    // API links
    let linkToDebits = "https://moj-api.herokuapp.com/debits";
    let linkToCredits = "https://moj-api.herokuapp.com/credits";

    // Call debits, and add each one to the debits list
    try
    {
      let debs = await axios.get(linkToDebits);

      // Add up debits to get total debt, to be subtracted from balance
      let debt = 0;
      debs.data.forEach(deb => {
        debt += deb.amount;
      });

      // Update balance and list of debits
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

      // Add up credits to get total credt (not a word) to add to balance
      let credt = 0;
      creds.data.forEach(cred => {
        credt += cred.amount;
      });

      // Update balance and list of credits
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
      <div>
      <Header />
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
      </div>
    );

    const LogInComponent = () => (
      <div>
      <Header/>
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
      </div>
    );

    const CreditsComponent = () => (
      <div>
      <Header />
      <Credits addCredit={this.addCredit} credits={this.state.credits} />
      <AccountBalance accountBalance={this.state.accountBalance}/>
      </div>
    );

    const DebitsComponent = () => (
      <div>
      <Header />
      <Debits addDebit={this.addDebit} debits={this.state.debits} />
      <AccountBalance accountBalance={this.state.accountBalance}/>
      </div>
    );

    return (
      <Router basename="/sturdy-garbanzo">
        <div className="App">
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </div>
      </Router>
    );
  }

}

export default App;