import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Axios from './Components/Axios'
import Navbar from './Components/Navbar'
import Demo from './Components/Demo'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Index'
import Shop from './Pages/Shop/Index'
import About from './Pages/About/Index'
import Vender from './Pages/Venders/Index'
import Megamenu from './Pages/Mega_Menu/Index'
import Blog from './Pages/Blog/Index'
import Pages from './Pages/Page/Index'
import Contact from './Pages/Contact/Index'
import Heroslider from './Components/Heroslider'
import Model from './Components/Model'

const App = () => {
  const[loader,setLoader]=useState(true)
  useEffect(()=>{
    // setLoader(false)
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  })

  if(loader){
    return <Model/>
  }
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>}/>
        <Route exact={true} path='/About' element={<About/>}/>
        <Route exact={true} path='/Shop' element={<Shop/>}/>
        <Route exact={true} path='/Vender' element={<Vender/>}/>
        <Route exact={true} path='/Megamenu' element={<Megamenu/>}/>
        <Route exact={true} path='/Blog' element={<Blog/>}/>
        <Route exact={true} path='/Pages' element={<Pages/>}/>
        <Route exact={true} path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App