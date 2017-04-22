import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Layout1 from '../components/Layout1';
import Category from '../components/Category';
import Iam from '../components/Iam';

window.audioPlayer = document.querySelector('#audioPlayer')

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: [{ photo: "", products: [{ id: 0 }] }]
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/collections')
            .then(response => response.json())
            .then(response => this.setState({ collections: response }))
            .then(blah => console.log(this.state.collections[0].photo))
            console.log(this.props)
    }

    render() {
        // const collections = this.state.collections.map((collection, index) => <Category key={index} className={"collection" + index} {...collection} />)

        window.audioPlayer.pause()
        window.audioPlayer.src = '/audio/intro_song.mp3'
        window.audioPlayer.play()

        return <div>
            <Iam />
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification welcome">
                                    <p className="title header">Welcome</p>
                                    <p className="subtitle"></p>
                                    <div className="about"> With Chéri, unique shopping features allow the buyer, the wearer, the feeler to be perfectly whoever they are, because whoever you are, Chéri looks good on <strong>you</strong><br/><br/>
                                        Through the interactive simulation of the site, take time to hear the music and descriptions, let your mind wander to where these ladies are going in the clothes. We've all experienced an occasion where we need the perfect outfit & for our purposes: these are those outfits.<br/><br/></div>
                                </article>
                                <article className="tile is-child notification wallpaper"></article>
                            </div>
                            <div className="tile is-parent">
                                <div className="wallpaperImageBackground">
                                    <article className="tile is-child notification wallpaperImage">
                                        <p className="title"></p>
                                        <p className="subtitle">Seeing is believing...but so is Hearing~</p>
                                        <ul> Feel free to click around. Here is what you'll find,<br/>
                                            <li>help incorporating items into buyer's wardrobe</li><br/>
                                            <li>a different model for each outfit size</li><br/>
                                            <li>mother's, couples, friendships, pure glamour, it's all inside...</li><br/>
                                        </ul>  
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification pastCollections">
                                <div className="content">
                                    <p className="title">Past Collections</p>
                                    <div className="content">
                                        <p>thumbnails with overlays</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="title is-parent">
                        <article className="title is-child">
                                <div className="content enter">
                                    <article className="tile is-child notification collectionImageBackground">
                                        <Category photo={this.state.collections[0].photo} id={this.state.collections[0].products[0].id} />
                                    </article>
                                </div>
                        </article>
                    </div>
                    </div>
                </div>
            </div>
        
    }
}

export default Categories;



// <div className="tile is-parent enterLoad">
//                     <div className="content">
//                         <p className="title">Enter Site Demo Here</p>

//     <div className="tile is-parent enterLoad">
//     <article className="tile is-child notification enter">
//       <div className="content">
//         <p className="title">Enter Site Demo Here</p>
//         <div className="content enterPic">
//           <img src="./img/cat1.jpg"/>
//         </div>
//       </div>
//     </article>
//   </div>
