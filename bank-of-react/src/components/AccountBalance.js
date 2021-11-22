import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <h2 class="balance">
        Balance: {this.props.accountBalance}
        </h2>
      </div>
    );
  }
}

export default AccountBalance;