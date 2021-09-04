import React, { useEffect } from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import './index.css'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='home'>
      <Section1 />
      <Section2 />
    </div>
  )
}
