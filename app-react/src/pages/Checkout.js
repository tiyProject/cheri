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
              <div className="orderImage" role="button">
                <Sale className={"collection" + (this.props.params.collectionId - 1)} {...(this.state.collections.length > 0 ? this.state.collections[this.props.params.collectionId] : {})} />
              </div>
            </div>
          </div>
            <div className="column is-half">
              
                 
                  <div tabIndex="0" className="field">
                    <label htmlFor="name" className="sr-only">
                        First Name
                        </label>
                        First Name
                    <p className="control">
                      <input tabIndex="0" className="input" id="name" type="text" placeholder="ex. Bridget" />
                    </p>
                  </div>

                  <div tabIndex="0" className="field">
                    <label htmlFor="lastname" className="sr-only">
                        Last Name
                        </label>
                        Last Name
                    <p className="control">
                      <input tabIndex="0" className="input" id="lastname"  type="text" placeholder="ex. Bardot" />
                    </p>
                  </div>

                  <div tabIndex="0" className="field">
                    <label htmlFor="email" className="sr-only">
                        Email
                        </label>
                        Email
                    <p className="control">
                      <input tabIndex="0" className="input" id="email" type="text" placeholder="Email input" value="" />
                       </p>
                  </div>
                 

                  <div tabIndex="0" className="field">
                    <label className="label">Emoji</label>
                    <p className="control">
                      <span className="select" role="button">
                        <select>
                          <option tabIndex="0">Select</option>
                          <option tabIndex="0">✨</option>
                          <option tabIndex="0">😇</option>
                           <option tabIndex="0">💅</option>
                            <option tabIndex="0">🍟</option>
                        </select>
                      </span>
                    </p>
                  </div>

                  <div tabIndex="0" className="field">
                    <label htmlFor="message" className="sr-only">
                        Message
                        </label>
                    <p className="control">
                      <textarea tabIndex="0" className="textarea" id="message" placeholder="talented, brilliant, incredible, amazing, show stopping, spectacular, never the same, totally unique, completely not ever been done before, unafraid to reference or not reference, put it in a blender"></textarea>
                    </p>
                  </div>

                  <div tabIndex="0" className="field">
                    <p className="control">
                      <label htmlFor="checkbox" className="checkbox">
                        <input tabIndex="0" type="checkbox" id="checkbox" />
                        Pls send me Emails 
                      </label>
                    </p>
                  </div>

                  <div tabIndex="0" className="field">
                    <p className="control">
                      <label htmlFor="yas" className="radio">
                        <input tabIndex="0" type="radio" name="question" id="yas" role="button"/>
                        Yas
                      </label>
                      <label htmlFor="gaga" className="radio">
                        <input tabIndex="0" type="radio" name="question" id="gaga" role="button" />
                      Gaga
                      </label>
                    </p>
                  </div>

                  <div tabIndex="0" className="field is-grouped">
                    <p className="control">
                      <button tabIndex="0" className="button is-primary" role="button" onClick={() => browserHistory.push('/ThankYou/')}>Submit</button>
                    </p>
                    <p className="control">
                      <button tabIndex="0" className="button is-link" role="button" onClick={() => browserHistory.push('/products/')} >Cancel</button>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        
  
    
    
  }
}

export default Checkout;