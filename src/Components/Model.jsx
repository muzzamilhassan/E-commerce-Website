import React from 'react'
import './Model.css'
import { useState,useEffect } from 'react'
const Model = () => {
    // const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //   setLoading(false)
    // })
    // if(loading){
    //   return <Model/>
    // }
  return (
    <div className='model'>
      {/* hello */}
    <img src="\src\Images\loading.gif" alt="loader"/>
    </div>
  )
}

export default Model