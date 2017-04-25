import React, { Component } from 'react';

class StyleImg extends Component {
    render() {
        return (
            <div className="column is-one-third">
                <div className="thumbNailStyle">
                     <img className="stylesLoad" src={this.props.photo} alt={this.props.title}/> 
                </div>
              
            </div>
        );
    }
}

export default StyleImg;
    