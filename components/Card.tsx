import React from 'react'
import Image from 'next/image'
import Blog from './Blog'
import Header from './Header'
import Footer from './Footer'
const Card = () => {
  return (
    <>
    <div className='contenido'>
        <Header/>
        <Blog/>
        <Footer/>
    </div>
    </>
  )
}

export default Card