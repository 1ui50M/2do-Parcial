import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className='rectangulo'>
        <div className='circulo'>
          <h1 className='uno'>1</h1>
        </div>
        <h2 className='texto'>Agenda/Topic</h2>
        <Image src='/Frame 266.svg' alt='Frame-image' width={30} height={30}/>
      </div>
    </>
  )
}

export default Header