import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Menu from '@/components/menu'
import Header from '@/components/navbar'
import Reviews from '@/components/review'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Menu/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Page
