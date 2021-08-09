import React, { useState } from 'react'
import img1 from '../../../../assets/Temp/blogTemp/1.png'
import img2 from '../../../../assets/Temp/blogTemp/2.png'
import img3 from '../../../../assets/Temp/blogTemp/3.png'
import img4 from '../../../../assets/Temp/blogTemp/4.png'
import img5 from '../../../../assets/Temp/blogTemp/5.png'
import img6 from '../../../../assets/Temp/blogTemp/6.png'
import mailSymb from '../../../../assets/mail-input-logo.svg'
import { ReactComponent as SVGComponent } from '../../../assets/newsletter-img.svg'
import './section2.css'
import { useHistory } from 'react-router-dom'

export default function Section2() {
  const [email, setEmail] = useState('')
  const history = useHistory()
  const data = [img1, img2, img3, img4, img5, img6]
  function handleSubmit(e) {
    e.preventDefault()
    setEmail('')
  }
  function handleMoreBlogs() {
    history.push('/blogs')
  }

  return (
    <main className='home__section2'>
      <div className='home__section2__blog__container'>
        {data.map((imgSrc, key) => {
          return (
            <img
              src={imgSrc}
              className='home__section2__blog'
              key={key}
              alt='blog'
            />
          )
        })}
      </div>
      <div className='home__section2__lower'>
        <div className='home__section2__more-blogs'>
          <button className='more-blogs-btn' onClick={handleMoreBlogs}>
            See More Blogs
          </button>
        </div>
        <div className='home__section2__subscribe'>
          <SVGComponent className='home__section2__subscribe__svg' />
          <div className='home__section2__subscribe__form'>
            <h3>Don’t want to miss blog of your favourite writer??</h3>
            <h4>Subscribe to get latest blog updates</h4>
            <form>
              <label htmlFor='email-id' className='mail-input-label'>
                <img src={mailSymb} alt='mail-symbol' />
              </label>
              <input
                name='email-id'
                id='email-id'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder='Enter your email ID'
                pattern='[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+'
                className='home__section2__subscribe__form__input'
              />
              <button type='submit' className='btn' onClick={handleSubmit}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
