import React, { useEffect,useState } from 'react'
import Heroslider from '../../Components/Heroslider'
import CateGarie from '../../Components/CateGarie'
import Banner from '../../Components/Banner'
import Product from '../../Components/Product'
import ProductSecond from '../../Components/ProductSecond'
import FruitCate from '../../Components/FruitCate'
import Timer from '../../Components/Timer'
import LastHero from '../../Components/LastHero'
import Footer from '../../Components/Footer'
import Model from '../../Components/Model'
import Header from '../../Components/Header'
const Home = () => {
  return (
    <div>
      {/* <Model/> */}
      <Heroslider/>
      <CateGarie/>    
      <Banner/>
      <Product/>
      <ProductSecond/>
      {/* <Timer/> */}
      <FruitCate/>
      <LastHero/>
      <Footer/>
    </div>
  )
}

export default Home