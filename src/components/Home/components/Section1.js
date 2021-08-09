import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../../../components/Carousel'
import CreateBlogBox from './createBlogBox'
import { data as CarouselContent } from './CarouselContent'
import { ReactComponent as ChevronDown } from '../../../../assets/chevron.svg'
import './section1.css'

export default function Section1() {
  const heroRef = useRef()
  const [isAtTop, setIsAtTop] = useState(false)

  function scrollSection() {
    window.scrollTo({
      top: heroRef.current.clientHeight,
      behavior: 'smooth',
      left: 0,
    })
    window.removeEventListener('scroll', scrollSection)
    window.addEventListener('scroll', filterNonIdealPosition)
    setIsAtTop(false)
  }

  function filterNonIdealPosition() {
    if (window.pageYOffset <= 0) {
      setIsAtTop(true)
      window.removeEventListener('scroll', filterNonIdealPosition)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setIsAtTop(window.pageYOffset <= 0)
    window.addEventListener('scroll', filterNonIdealPosition)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isAtTop) {
      window.addEventListener('scroll', scrollSection)
    }
    // eslint-disable-next-line
  }, [isAtTop])

  return (
    <div className='hero' ref={heroRef}>
      <div className='hero__above_layer'>
        <div className='hero__above_layer__text'>
          <CreateBlogBox />
          <div id='sen'>Organising Yourself</div>
        </div>
        <div className='hero__above_layer__scroll' onClick={scrollSection}>
          <ChevronDown className='chevron-down-first-child' />
          <ChevronDown className='chevron-down-second-child' />
        </div>
      </div>
      <Carousel>
        {CarouselContent.map((data, index) => {
          return (
            <div
              style={{ backgroundImage: `url(${data.img})` }}
              className='carousel__item__image'
              key={index}
            ></div>
          )
        })}
      </Carousel>
    </div>
  )
}
