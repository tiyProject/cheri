import React, { Component } from 'react';



class Iam extends React.Component {
  
  // _handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
      
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  //   if (e.key === 'Enter') {
  //  .then(res => {
    alert(this.state.value)
    event.preventDefault();
  }



  render() {
    
    return (
        <nav className="nav">
        <div className="nav-center">
          <a className="nav-item iAM">
            I am
      </a>
      <div className="field has-addons iAMField" onChange={this.handleSubmit}>
      <p className="control">
        <input className="input" type="text" placeholder="who are you ?" value={this.state.value} onKeypress={(e) =>{this.handleChange}} />
          </p>
          </div>
        </div>
      </nav>
    );
  }
}
  

export default Iam;

//  <nav className="nav">
//     <div className="nav-center">
//       <a className="nav-item iAM">
//            I am 
//       </a>
//           <div className="field has-addons iAMField">
//            <p className="control">
//              <input className="input" type="text" placeholder="who are you ?">
//           </p>
//          </div> 
//     </div>
//   </nav>