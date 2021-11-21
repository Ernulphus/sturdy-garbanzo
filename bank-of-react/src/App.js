import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';

// import Credits from './components/Credits';
import Debits from './components/Debits';

import './App.css';
import axios from 'axios';

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

    // Push new
    const newCredits = {...this.state.credits}
    newCredits.push(cred)
    this.setState({credits: newCredits})
  }

  addDebit = (deb) => {
    deb.preventDefault();
    const description = deb.target[0].value;
    const amount = Number(deb.target[1].value);
    console.log(description, amount);
  }

  // Request credits and debits from the API and put them in the starting debits and credits arrays
  componentDidMount = async () => {
    let linkToDebits = "https://moj-api.herokuapp.com/debits";
    let linkToCredits = "https://moj-api.herokuapp.com/credits";

    // Call debits, and add each one to the debits list
    try
    {
      let debs = await axios.get(linkToDebits);
      this.setState({debits: debs.data});
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
      this.setState({credits:creds.data});
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
    // const CreditsComponent;
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={this.state.debits} />)

    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path = "/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }

}

export default App;