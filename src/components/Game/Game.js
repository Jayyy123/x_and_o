import React, { Component } from 'react'
import Board from './Board'
import '../../styles/Game.css'

class Game extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        positions:[1,2,3,4,5,6,7,8,9],
        value : "O"
      }
    }

  render() {
    const {value} = this.state
    return (
      <div>
          <Board  value = {value} />
      </div>
    )
  }
}

export default Game