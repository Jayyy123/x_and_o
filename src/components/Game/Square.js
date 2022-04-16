import React, { Component } from 'react'

export class Square extends Component {
  render() {
      const { value, sty, click, pos, win } = this.props
      return (
      <div className={`square ${sty}`} onClick = {() => click(pos)}>
          {/* <h3>Game time</h3> */}
            <h3>
              {win ? <hr className='hr'/> : ""}
                {value[pos]}
                <p  />
            </h3>
      </div>
    )
  }
}

export default Square