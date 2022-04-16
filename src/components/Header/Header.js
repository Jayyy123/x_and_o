import React, { Component } from 'react'
import '../../styles/Header.css'

class Header extends Component {
  render() {
    return (
    <div>
        <div className="container">
            <div className="left">
                <p>X</p>
                <p className='p1'>and</p>
                <p className='p2'>O</p>
            </div>
            <div className="middle">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>History</p>
            </div>
            <div className="right">
                <button >
                    Let's Play!
                </button>
            </div>
        </div>
    </div>
    )
  }
}

export default Header