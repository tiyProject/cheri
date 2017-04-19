import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Layout1 from '../components/Layout1';
import Category from '../components/Category';
import Iam from '../components/Iam';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: [{photo: "", products:[{id:0}]}]
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/collections')
        .then(response => response.json())
        .then(response => this.setState({collections: response}))
        .then(blah => console.log(this.state.collections[0].photo))
    }

    render() {
        // const collections = this.state.collections.map((collection, index) => <Category key={index} className={"collection" + index} {...collection} />)

        return <div>
            <Iam />
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification welcome">
                                <p className="title">Welcome</p>

                            </article>
                            <article className="tile is-child notification wallpaper">

                            </article>
                        </div>
                        <div className="tile is-parent wallpaperImageBackground">
                            <article className="tile is-child notification wallpaperImage">
                    
                                <p className="title">A Unique Site</p>
                                <p className="subtitle">Here are all of the features</p>
                                <ul>
                                    <li>variations of styles</li>
                                    <li>variations of size</li>
                                    <li>lots and lots of colours</li>
                                    <li>extra info to read</li>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ratione soluta numquam</p>
                                </ul>
                                
                            </article>
                            
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification pastCollections">
                            <p className="title">Past Collections</p>
                            <div className="container">
                                <div className="content">
                                    thumbnails with overlays
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                
                        <div className="content collectionImageBackground">
                            <div className="collectionImage">
                                <Category photo={this.state.collections[0].photo} id={this.state.collections[0].products[0].id}/>

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
