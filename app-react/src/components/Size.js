import React, { Component } from 'react';

class Size extends Component {
    render() {
        return (
            <div className="field">
                <label className="label">Size</label>
                <p className="control">
                    <span className="select">
                        <select>
                            <option>XSMALL</option>
                            <option>SMALL</option>
                            <option>MEDIUM</option>
                            <option>LARGE</option>
                        </select>
                    </span>
                </p>
            </div>
        );
    }
}

export default Size;


