import React, { Component } from 'react';


class Iam extends Component {



  
  render() {
    return (
      <nav className="nav">
        <div className="nav-center">
          <a className="nav-item iAM">
            I am
      </a>
          <div className="field has-addons iAMField">
            <p className="control">
              <input className="input" type="text" placeholder="who are you ?" />
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