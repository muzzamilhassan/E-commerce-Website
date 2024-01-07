import React from 'react'
import './FruitCate.css'
import Rating from '@mui/material/Rating';
import SubFruits from './SubFruits';

const FruitCate = () => {
  return (
    <>
      
      <div className="fruits-sec">
        <div className="subfruits">
          <h1 className='heading'>Top seller <hr /></h1>
          <SubFruits
          img='\src\Images\thumbnail-1.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-2.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-3.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
        </div>
        <div className="subfruits">
        <h1 className="heading">Trending Products<hr /></h1>
        <SubFruits
          img='\src\Images\thumbnail-4.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-5.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-6.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
        </div>
        <div className="subfruits">
        <h1 className="heading">Recently added<hr /></h1>
        <SubFruits
          img='\src\Images\thumbnail-7.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-8.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-9.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>

        </div>
        <div className="subfruits">
        <h1 className="heading">Top Rated<hr /></h1>
          <SubFruits
          img='\src\Images\thumbnail-10.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-11.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
          <SubFruits
          img='\src\Images\thumbnail-12.jpg'
          h1='Nestle Original Coffee-Mate Coffee Creamer'/>
        </div>
      </div>
    </>
  )
}

export default FruitCate