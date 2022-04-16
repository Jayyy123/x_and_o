import React, { Component } from 'react'
import '../../styles/Hero.css'

class Hero extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        slider_text : "Relive your childhood memories here!",
        x1:"x1",
        x2:"x2",
        x3:"x3",
        x4:"x4",
        x:["x1","x2","x3","x4"]
      }
    }

    // component = () =>{
    //     setTimeout(() => {
    //         console.log("hello")
    //     }, 2000);
    // }

    

    images=()=>{
        this.setState({
            x1:this.state.x2,
            x3:this.state.x4,
            x2:this.state.x1,
            x4:this.state.x3,
        })
    }

    // imageState = ()=>{
    //     this.setState({

    //     })
    // }

  render() {
    return (
      <div>
          <div className="intro">

              <div className="slider-text">
                  <h3>{this.state.slider_text}</h3>
              </div>

              <div className="slider-container" >
                  <div className={this.state.x1} />
                  <div className={this.state.x2}/>
                  <div className={this.state.x3}/>
                  <div className={this.state.x4}/>
              </div>
          </div>
      </div>
    )
  }
}

export default Hero