import React, { useEffect, useState } from 'react'
import './Carousel.css'

export default function Carousel(props) {
  const [itemIndex, setItemIndex] = useState(0)
  const [hasTempClass, setHasTempClass] = useState(false)
  const [oldIndex, setOldIndex] = useState(-1)

  function handleItemChange(index) {
    if (index === itemIndex) return
    if (index) {
      setOldIndex(itemIndex)
      setItemIndex(index)
    } else {
      setItemIndex((itemIndex) => {
        return (itemIndex + 1) % props.children.length
      })
      setOldIndex((oldIndex) => {
        return (oldIndex + 1) % props.children.length
      })
    }

    setHasTempClass(true)
  }

  function handleTempClassRemove(index) {
    if (itemIndex === index) {
      setOldIndex(itemIndex - 1)
      setHasTempClass(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(handleItemChange, 3500)
    return () => clearInterval(interval)
    //eslint-disable-next-line
  }, [])

  return (
    <div className='carousel__wrapper'>
      <div className='carousel__item__wrapper'>
        {props.children.map((item, key) => {
          return (
            <div
              className={`carousel__item ${
                itemIndex === key ? 'carousel__item__active' : ''
              } ${itemIndex === key && hasTempClass ? 'fadeInRight' : ''} 
              ${oldIndex === key && hasTempClass ? 'fadeOutLeft' : ''}`}
              key={key}
              onAnimationEnd={() => {
                handleTempClassRemove(key)
              }}
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
              key={index}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
