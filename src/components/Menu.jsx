import React, { Component } from 'react'
import './Menu.css'
import img1 from '../images/trangphuc1.png'
import img2 from '../images/trangphuc2.png'
import img3 from '../images/trangphuc3.png'
import img4 from '../images/trangphuc4.png'
import img5 from '../images/trangphuc5.png'
import img6 from '../images/trangphuc6.png'
import img7 from '../images/trangphuc7.png'
import img8 from '../images/trangphuc8.png'
import img9 from '../images/trangphuc9.png'
import img10 from '../images/trangphuc10.png'

export default class Menu extends Component {

  listImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
  changeClothes = (img) => {
    this.props.handleChangeClothes(img)
  }

  render() {

    return (
      <div className='menu-box'>
        {this.listImg.map((item, index) => {
          return (
            <div key={index} className="menu" onClick={() => this.changeClothes(item)}>
              <img src={item} alt="" />
            </div>
          )
        })}

      </div>
    )
  }
}
