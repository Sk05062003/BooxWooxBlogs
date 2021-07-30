import Carousel from '../Carousel'
import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='home__main'>{'Home'}</div>
      <Carousel>{['hello', 'bello']}</Carousel>
    </div>
  )
}
