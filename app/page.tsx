import Home from '@/Home/Home'
import React from 'react'
import Header from '@/Header/Header'
import About from '@/About/About'
import Dashboard from '@/Dashboard/Dashboard'
import Link from 'next/link'


const page = () => {
  return (
    <>
    <div className='todo'>
      <Link href="./Home">
        <h1>Home</h1>
      </Link>
      <Link href="/About">
        <h1>About</h1>
      </Link>
      <Link href="/Dashboard">
        <h1>Dashboard</h1>
      </Link> 
    </div>
    </>
  )
}

export default page
