import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div class="App-header">
        <Link to="/">Home </Link>
        <Link to="/userProfile">User Profile </Link>
        <Link to="/debits">Debits </Link>
        <Link to="/credits">Credits </Link>
      </div>
    );
  }
}

export default Header;