import React, { Component } from 'react'
import img from './PHOTO.PNG'

 class Car extends Component {
    constructor(props){
     super(props)
     this.state={
        person:{fullname:'Ameur',profession:'test technology engener',imgsrc:img},
        show:true,

     }
    }
    componentDidMount(){
        console.log("hello")
    }
       change=()=>{
         this.setState({show:!this.state.show})
        
      }
  render() {
    return (
      <div>
        {this.state.show?<>
        <h1>my name is {this.state.person.fullname}</h1>
        <h1> {this.state.person.profession}</h1>
       <img src={this.state.person.imgsrc}></img></>:
     null  
    }
    <button onClick={this.change}>click</button>
    
      </div>
    )
  }
}
export default Car
