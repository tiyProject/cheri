import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ThankYou extends Component {
  render() {
    return (
        
        <div className="container">
            <div className="thankYouCard">
                <img src='/img/cherilogo.gif' />
                <img src='/img/thanks.png' /><br/><br/>
                 <button className="button backButton" onClick={() => browserHistory.push('/')}>Return to Site<br/>✨</button>
            </div>
           

        </div>
    );
  }
}

export default ThankYou;