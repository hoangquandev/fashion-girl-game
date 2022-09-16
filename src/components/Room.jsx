import React, { Component } from 'react'
import './Room.css'
import girl from '../images/girl.png'
import Menu from './Menu'

export default class Room extends Component {
  state = {
    img: false
  }
  handleChangeClothes = (img) => {
    this.setState({
      img: img
    })
  }
  render() {
    return (
      <div className='room'>
        <div className="girl">
          <div className="img">
            <img src={girl} alt="" />
            <img src={this.state.img} alt="" style={{ display: `${this.state.img ? '' : 'none'}` }} />
          </div>
          <Menu handleChangeClothes={this.handleChangeClothes} className="menu" />
        </div>
      </div>
    )
  }
}
