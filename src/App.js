import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
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

  addCredit = (amount) => {
    const newCredits = {...this.state.credits}
    newCredits.push(amount)
    this.setState({credits: newCredits})
  }

  addDebit = (amount) => {
    const newDebits = {...this.state.debits}
    newDebits.push(amount)
    this.setState({debits: newDebits})
  }

  componentDidMount = () => {

  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<logIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    return (
      <Router>
        <div class="App">
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path = "/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
        </div>
      </Router>
    );
  }

}

export default App;