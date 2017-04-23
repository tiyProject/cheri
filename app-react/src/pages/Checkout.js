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
              
                 
                  <div className="field">
                    <label className="label">First Name</label>
                    <p className="control">
                      <input className="input" type="text" placeholder="ex. Bridget" />
                    </p>
                  </div>

                  <div className="field">
                    <label className="label">Last Name</label>
                    <p className="control">
                      <input className="input" type="text" placeholder="ex. Bardot" />
                    </p>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                      <input className="input" type="text" placeholder="Email input" value="" />
                  </div>

                  <div className="field">
                    <label className="label">Emoji</label>
                    <p className="control">
                      <span className="select">
                        <select>
                          <option>Select</option>
                          <option>✨</option>
                          <option>😇</option>
                           <option>💅</option>
                            <option>🍟</option>
                        </select>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <p className="control">
                      <textarea className="textarea" placeholder="talented, brilliant, incredible, amazing, show stopping, spectacular, never the same, totally unique, completely not ever been done before, unafraid to reference or not reference, put it in a blender"></textarea>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control">
                      <label className="checkbox">
                        <input type="checkbox" />
                        Pls send me Emails 
                      </label>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control">
                      <label className="radio">
                        <input type="radio" name="question" />
                        Yas
                      </label>
                      <label className="radio">
                        <input type="radio" name="question" />
                      Gaga
                      </label>
                    </p>
                  </div>

                  <div className="field is-grouped">
                    <p className="control">
                      <button className="button is-primary" onClick={() => browserHistory.push('/ThankYou/')}>Submit</button>
                    </p>
                    <p className="control">
                      <button className="button is-link" onClick={() => browserHistory.push('/products/')} >Cancel</button>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        
  
    
    
  }
}

export default Checkout;