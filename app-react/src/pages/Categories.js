import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Layout1 from '../components/Layout1';
import Category from '../components/Category';
import Iam from '../components/Iam';
import Flickity from 'flickity';

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
                                    <p className="title header">
                                    <img className="titleOne" src='/img/welcome.png'/></p>
                                    <img className="topImg" src='/img/top.png'/>
                                </article>
                                <article className="tile is-child notification wallpaper">
                                <img className="bottomImg" src='/img/bottom.png'/>
                                </article>
                            </div>
                            <div className="tile is-parent pushDown">
                                <div className="wallpaperImageBackground">
                                    <article className="tile is-child notification wallpaperImage">
                                        <p className="title infoTitle">Seeing is believing...</p>
                                        <p className="subtitle subtitleInfo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but so is <strong className="italic">hearing:</strong></p>
                                        <p className="infomation">With Chéri, unique shopping features allow the buyer, the wearer, the feeler~ to be perfectly whoever they are, because whoever you are, Chéri looks good on <strong className="you">you</strong><br/><br/></p> 
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification pastCollections">
                                <div className="content">
                                    <p className="title pastCollect"><strong>✨Past Collections✨</strong></p>
                                    <div className="content">
                                        <div className="carouselFirst" data-flickity='{ "wrapAround": true }'>
                                        <div className="carouselCell"><img className="first" src='/img/kaj.jpg'/></div>
                                        <div className="carouselCell"><img className="second" src='/img/kaj2.jpg'/></div>
                                        <div className="carouselCell"><img className="third" src='/img/girls2.jpg'/></div>
                                        <div className="carouselCell"><img className="fourth" src='/img/girls3.jpg'/></div>
                                        </div>
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
                 <footer className="footer">
                    <div className="container">
                    <div className="content has-text-centered">
                    <p>
                    <img className="footerLogo" src='/img/footerLogo.jpg'/><br/>
                    <p className="caps"> ~an Iron Yard final project 2017 powered by the Back End magic of Rob Taylor~ </p>
                    </p>
                    </div>
                    </div>
                    </footer>
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
