import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
        <img class="App-logo" src="https://cdn.iconscout.com/icon/free/png-256/bank-1417507-1201209.png" alt="bank"/>
        <h1>Bank of React</h1>

        <Link to="/userProfile">User Profile</Link>
        <br/>
        <Link to="/debits">Debits</Link>
        <br/>
        <Link to="/credits">Credits</Link>

        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;