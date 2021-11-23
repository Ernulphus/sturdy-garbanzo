import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div class="Home">
        <img class="App-logo" src="https://cdn.iconscout.com/icon/free/png-256/bank-1417507-1201209.png" alt="bank"/>
        <h1>Bank of React</h1>

        <h2 class="Home-links">
        <div>
        <Link to="/logIn">Change User</Link>
        </div>
        <div>
        <Link to="/userProfile">User Profile</Link>
        </div>
        <div>
        <Link to="/debits">Debits</Link>
        </div>
        <div>
        <Link to="/credits">Credits</Link>
        </div>
        </h2>

        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;