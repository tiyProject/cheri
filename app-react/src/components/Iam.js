import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Iam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showLogo: false
        };

        this.handleEnter = this.handleEnter.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleEnter(event) {
        if (event.key === 'Enter') {
            this.setState({ showLogo: true });
        }
        else if (event.key === 'Enter') {
            this.setState({ showLogoAndArrow: true });
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <nav className="nav">
                <div className="nav-center" style={{padding: '20px'}}>
                    {
                        this.props.justLogo === true ?
                        <img src="/img/cherilogo.gif" className="iAMLogo" alt="Chéri" onClick={() => browserHistory.push('/')} /> : 
                        <div>
                            {this.state.showLogo === false ?
                                <span>
                                    <span className="iAM">I am &nbsp;</span>
                                    <input className="input iAMInput" type="text" placeholder="who are you ?" value={this.state.value} onKeyPress={this.handleEnter} onChange={this.handleChange} />
                                </span>
                                :
                                <span>
                                    <span className="iAM">I am &nbsp;</span>
                                    <span className="iAM">{this.state.value} &nbsp; ,</span>
                                    <span className="iAM">I am &nbsp;</span>
                                    <img src="/img/cherilogo.gif" className="iAMLogo" alt="Chéri" />
                                </span>
                              
                            }
                        </div>
                    }
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