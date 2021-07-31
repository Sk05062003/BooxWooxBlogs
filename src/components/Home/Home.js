import Carousel from '../Global/Carousel'
import CreateBlogBox from './createBlogBox'
import React from 'react'
import './Home.css'
import { data as CarouselContent } from './CarouselContent'

export default function Home() {
  return (
    <div className='home'>
      <div className='hero'>
        <div className='hero__above_layer'>
          <div className='hero__above_layer__text'>
            <CreateBlogBox />
            <div id='sen'>Organising Yourself</div>
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
    </div>
  )
}
