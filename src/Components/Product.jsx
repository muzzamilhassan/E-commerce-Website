import React from 'react'
import Obj from '../APIs/Product'
import './Product.css'
const Product = () => {
    
  return (
    <div className='mainn'>
        {
            Obj.map((e)=>{
               return(
                <div className='pro-sec'> 
                <h6 className='saleBanner'>{e.sale}</h6>
                <div className='sub-banner'>
                <div className="imgs-sec">
                <img src={e.URL_1} alt="image missing" className='img img-1'/>
                <img src={e.URL_2} alt="image missing" className='img img-2'/>
                </div>
                <span>{e.Categrey}</span>
                <p>{e.Detail}</p>

                <span>{e.rating}</span>
                <div>
                    <span>{e.newPrice}</span>
                    <span>{e.oldPrice}</span>
                    </div>
                </div>
                </div>
               )
            })
        }
    </div>
  )
}

export default Product