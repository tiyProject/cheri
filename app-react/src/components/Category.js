import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Category extends Component {
  render() {
    return (
      <div tabIndex="0" title={this.props.title} onClick={() => browserHistory.push('/product/' + this.props.id)}>
        <p className="title"> <img className="enterDemo" src="/img/enterDemo4.png" alt={this.props.title} /></p>
        <div title={this.props.title} className={"collectionImage" + this.props.className} alt={this.props.title} style={{backgroundImage: 'url(' + this.props.photo + ')', backgroundSize: 'cover', height: '60vw'}}>
        </div>
      </div>
    );
  }
}

export default Category;

//       <div classNameNameName="column is-one-quarter" title={this.props.title} onClick={() => browserHistory.push('/products/' + this.props.id)}>
      //   <div classNameNameName="collectionImageBackground">
      //     <div classNameNameName={"collectionImage " + this.props.classNameNameName}>
      //       <img src={this.props.photo} alt={this.props.title} />
      //     </div>
      //   </div>
//       </div>
//     );
//   }
// }


//     <div classNameName="columns is-multiline is-mobile">
//       <div classNameName="column is-one-quarter">
//         <div classNameName="frameA">
//           <img classNameName="titleImg" src="/img/cat1.jpeg" />
//         </div>
//       </div>
//       <div classNameName="column is-one-quarter">
//         <div classNameName="frameB">
//           <img classNameName="titleImg" src="/img/cat2.jpg" />
//         </div>
//       </div>
//       <div classNameName="column is-one-quarter">
//         <div classNameName="frameC">
//           <img classNameName="titleImg" src="/img/cat3.jpg" />
//         </div>
//       </div>
//       <div classNameName="column is-one-quarter">
//         <div classNameName="frameD">
//           <img classNameName="titleImg" src="/img/cat4.jpeg" />
//         </div>
//       </div>
//     </div>