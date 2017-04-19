import React, { Component } from 'react';

class BigImg extends Component {
  render() {
    return (
      <div className="styleLoadSpace">
                    <img className="styleLoad" src={this.props.photo} />
                </div>
    );
  }
}

export default BigImg;


