import React, { Component } from 'react'
// import { Fragment } from 'react/cjs/react.production.min'
import Square from './Square'

class Board extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        value: Array(9).fill(""),
        turn: false,
        pos:"",
        win:false,
        winv:false,
        a:1,
      }
    }

    winh(a,b,c){
        const {value} = this.state

        if
        (
            (((value[a] === "X" && value[b] === "X" && value[c]) === "X") || ((value[a] === "O" && value[b] === "O" && value[c]) === "O"))
        ){
            this.setState({
                win:true,
            })
            return true
        }else{
            return false
        }
    }

    checkDraw(){
        const {value} = this.state

        value.forEach(element => {
            if(element === ""){
                return true
            }
        })
        
    }

    winner(pos){
        const {value} = this.state

        if
        (
            (((value[0] === "X" && value[1] === "X" && value[2]) === "X") || ((value[0] === "O" && value[1] === "O" && value[2]) === "O"))
            ||
            (((value[3] === "X" && value[4] === "X" && value[5]) === "X") || ((value[3] === "O" && value[4] === "O" && value[5]) === "O"))
            ||
            (((value[6] === "X" && value[7] === "X" && value[8]) === "X") || ((value[6] === "O" && value[7] === "O" && value[8]) === "O"))
            ||
            (((value[0] === "X" && value[4] === "X" && value[8]) === "X") || ((value[0] === "O" && value[4] === "O" && value[8]) === "O"))
            ||
            (((value[0] === "X" && value[3] === "X" && value[6]) === "X") || ((value[0] === "O" && value[3] === "O" && value[6]) === "O"))
            ||
            (((value[1] === "X" && value[4] === "X" && value[7]) === "X") || ((value[1] === "O" && value[4] === "O" && value[7]) === "O"))
            ||
            (((value[2] === "X" && value[5] === "X" && value[8]) === "X") || ((value[2] === "O" && value[5] === "O" && value[8]) === "O"))
            ||
            (((value[2] === "X" && value[4] === "X" && value[6]) === "X") || ((value[2] === "O" && value[4] === "O" && value[6]) === "O"))
        )
        
        {
            alert(`${pos} has won the game!! \n Great job!`)
            this.setState({
                value:Array(9).fill(""),
                win:false
            })
        }else{
            return false
        }
    }

    componentDidUpdate = ()=>{
        this.winner(this.state.pos)
    }

    handleBoxClick = (pos) => {
        
        let squares = [...this.state.value]
        
        if(this.state.value[pos] === ""){

            if(this.state.turn === false ){
                squares[pos] = "X"
                this.setState({
                    turn:true
                })
            }else{
                squares[pos] = "O"
                this.setState({
                    turn:false
                })
            }
        }else{
            alert("You have already played in that box!")
        }

        this.setState({
            value : squares,
            pos:squares[pos],
        })

    }

  render() {
      const {value} = this.state
    return (
      <div className='board'>
          <div className='r1'>
            <Square value = {value} sty = {"c1"}  click = {this.handleBoxClick} win = {this.state.win} winner = {this.winner}  pos = {0} />
            <Square value = {value} sty = {"c2"}  click = {this.handleBoxClick} win = {this.state.win} winner = {this.winner} pos = {1} />
            <Square value = {value} sty = {"c3"}  click = {this.handleBoxClick} win = {this.state.win} winner = {this.winner} pos = {2}/>
          </div>
          <div className='r2'>
            <Square value = {value} sty = {"c1"}  click = {this.handleBoxClick} win = {this.state.win}  winner = {this.winner} pos = {3}/>
            <Square value = {value} sty = {"c2"}  click = {this.handleBoxClick} win = {this.state.win}  winner = {this.winner} pos = {4}/>
            <Square value = {value} sty = {"c3"}  click = {this.handleBoxClick} win = {this.state.win}  winner = {this.winner} pos = {5}/>
          </div>
          <div className='r3'>
            <Square value = {value} sty = {"bc1"} click = {this.handleBoxClick} win = {this.state.win}  winner = {this.winner} pos = {6} />
            <Square value = {value} sty = {"bc2"} click = {this.handleBoxClick} win = {this.state.win}  winner = {this.winner} pos = {7} />
            <Square value = {value} sty = {"bc3"}  click = {this.handleBoxClick} win = {this.state.win} winner = {this.winner} pos = {8} />
          </div>
      </div>
    )
  }
}

export default Board