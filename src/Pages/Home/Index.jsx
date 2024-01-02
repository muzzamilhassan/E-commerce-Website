import React from 'react'
import Heroslider from '../../Components/Heroslider'
import CateGarie from '../../Components/CateGarie'
import Banner from '../../Components/Banner'
import Product from '../../Components/Product'

const Home = () => {
  return (
    <div>
      <Heroslider/>
      <CateGarie/>    
      <Banner/>
      <Product/>
    </div>
  )
}

export default Home