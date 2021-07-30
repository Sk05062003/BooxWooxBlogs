import Carousel from '../Carousel'
import CreateBlogBox from './createBlogBox'
import React from 'react'
import './Home.css'
import { data as CarouselContent } from './CarouselContent'

export default function Home() {
  return (
    <div className='home'>
      <CreateBlogBox id='box' />
      <div id='sen'>Organising Yourself</div>
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
