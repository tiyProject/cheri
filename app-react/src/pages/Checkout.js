import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Iam from '../components/Iam';
import Sale from '../components/Sale';


window.audioPlayer = document.querySelector('#audioPlayer')

class Checkout extends Component {
       constructor(props) {
        super(props)
        this.state = {
            collections: []
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/collections')
        .then(response => response.json())
        .then(response => this.setState({collections: response}))
    }

    
  render() {
      //const collections = this.state.collections.map((collection, index) => <Sale key={index} className={"collection" + index} {...collection} />)
       window.audioPlayer.pause()
        window.audioPlayer.src = '/audio/LonelyLover.mp3'
        window.audioPlayer.play()
    return <div>
    <Iam justLogo={true}/>
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="frameRed">
              <div className="orderImage">
                <Sale className={"collection" + (this.props.params.collectionId - 1)} {...(this.state.collections.length > 0 ? this.state.collections[this.props.params.collectionId] : {})} />
              </div>
            </div>
          </div>
            <div className="column is-half">
              <div className="frameRed">
                <div className="order">
                  <header className="card-header">
                    <p className="card-header-title">
                      {this.props.title}
                    </p>
                  </header>
                  <div className="field">
                    <label className="label">Name</label>
                    <p className="control">
                      <input className="input" type="text" placeholder="Text input" />
                    </p>
                  </div>

                  <div className="field">
                    <label className="label">Username</label>
                    <p className="control has-icons-left has-icons-right">
                      <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fa fa-check"></i>
                      </span>
                    </p>
                    <p className="help is-success">This username is available</p>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <p className="control has-icons-left has-icons-right">
                      <input className="input is-danger" type="text" placeholder="Email input" value="hello@" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fa fa-warning"></i>
                      </span>
                    </p>
                    <p className="help is-danger">This email is invalid</p>
                  </div>

                  <div className="field">
                    <label className="label">Subject</label>
                    <p className="control">
                      <span className="select">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <p className="control">
                      <textarea className="textarea" placeholder="Textarea"></textarea>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control">
                      <label className="checkbox">
                        <input type="checkbox" />
                        I agree to the <a href="#">terms and conditions</a>
                      </label>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control">
                      <label className="radio">
                        <input type="radio" name="question" />
                        Yes
    </label>
                      <label className="radio">
                        <input type="radio" name="question" />
                        No
    </label>
                    </p>
                  </div>

                  <div className="field is-grouped">
                    <p className="control">
                      <button className="button is-primary" onClick={() => browserHistory.push('/')}>Submit</button>
                    </p>
                    <p className="control">
                      <button className="button is-link" onClick={() => browserHistory.push('/products/')} >Cancel</button>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          </div>
       
   </div>
    
    
  }
}

export default Checkout;