import React, { useState } from 'react'
import './Carousel.css'

export default function Carousel(props) {
  const [itemIndex, setItemIndex] = useState(0)

  function handleItemChange(index) {
    if (index === itemIndex) return

    setItemIndex(index)
  }

  return (
    <div className='carousel__wrapper'>
      <div className='carousel__item__wrapper'>
        {props.children.map((item, key) => {
          return (
            <div
              className={`carousel__item ${
                itemIndex === key ? 'carousel__item__active' : ''
              }`}
              key={key}
            >
              {item}
            </div>
          )
        })}
      </div>
      <div className='carousel__buttons'>
        {props.children.map((_, index) => {
          return (
            <div
              className={`carousel__button circular_btn ${
                itemIndex === index ? 'carousel__button__active' : ''
              }`}
              onClick={() => {
                handleItemChange(index)
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
