import React, { Component } from 'react';

class Checkbox extends Component {
    // constructor(props){
    //   super(props)
    //    this.state = { 
    //                   isSize1Visible: true, 
    //                   isSize2Visible: true, 
    //                   isSize3Visible: true,
    //                   isSize4Visible: true 
    //                 }
    // }

    render(){ console.log(this.props)
        return (
                       <label className="radio" >
                           
                            {this.props.size_name}
                        </label>
        )
    }
//  <input type="radio" name="size" onChange={() => this.setState({selected_size: this.state.product.sizes[this.props.index]})} />





//     renderSize1(){
//        if(this.state.isSize1Visible){
//             return (
//                 <View>
//                     <Size onClick={() => this.setState({ isSize1Visible: false })}>
//                         <label className="radio">
//                             <input type="radio" name="question" />
//                             XS
//                         </label>
//                     </Size>
//                 </View>    
//             )
//     }
//     }

//     renderSize2() {
//        if(this.state.isView2Visible){
//             return (
//                 <View>
//                     <Size onClick={() => this.setState({ isSize2Visible: false })}>
//                         <label className="radio">
//                             <input type="radio" name="question" />
//                             SM
//                         </label>
//                     </Size>
//                 </View>    
//             )
//     }
//     }   

//     renderSize3() {
//        if(this.state.isView3Visible){
//             return (
//                  <View>
//                     <Size onClick={() => this.setState({ isSize3Visible: false })}>
//                         <label className="radio">
//                             <input type="radio" name="question" />
//                             MD
//                         </label>
//                     </Size>
//                 </View>   
//             )
//     }
// }

 
//     renderSize4() {
//        if(this.state.isView4Visible){
//             return (
//                  <View>
//                     <Size onClick={() => this.setState({ isSize4Visible: false })}>
//                         <label className="radio">
//                             <input type="radio" name="question" />
//                             LG
//                         </label>
//                     </Size>
//                 </View>   
//             )
//     }
// }
    };
    

export default Checkbox;