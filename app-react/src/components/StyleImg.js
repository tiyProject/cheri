import React, { Component } from 'react';

class StyleImg extends Component {
    render() {
        return (
            <div className="column is-one-third">
                <div className="thumbNailStyle">
                   
                </div>
                <img className="stylesLoad" src={this.props.photo} /> 
            </div>
        );
    }
}

export default StyleImg;
    