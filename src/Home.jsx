import React from 'react'
import MainHeader from './Header/MainHeader'
import Splide from '@splidejs/splide'
import ProductMain from './Main/product/ProductMain'
import Splides from './Main/splide/Splife'
import OptionBlockMain from './Main/options/OptionBlockMain'
import BlogPostStructure from './Main/blog/BlogPostStructure'
import CareMainComponents from './Main/care/CareMainComponents'
import MainComponents from './Main/product/mainComponents'

const Home = () => {
  return (
      <main>
        <Splides />
        <MainComponents />
        <OptionBlockMain />
        <BlogPostStructure />
      </main>
  )
}

export default Home