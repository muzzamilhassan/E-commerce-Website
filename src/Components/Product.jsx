import React from 'react'
import Obj from '../APIs/Product'
import './Product.css'
import { LuHeartCrack } from "react-icons/lu";
import { TbBrandStackshare } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
const Product = () => {
    
  return (
    <div>
      <div className="headingSec productheadingsec">
        <h1>
        Popular Products
        </h1>
        <ul>
          <li><button style={{color:'#29A56C'}}>All</button></li>
          <li> <button>Cack & Milk </button></li>
          <li> <button>Cofees & Teas</button></li>
          <li> <button>Pet Foods </button></li>
          <li><button>Meats</button></li>
          <li> <button>Vegetables</button></li>
          <li><button>Fruits</button></li>
        </ul>
        </div>
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
                <div className='share-hover'>
                <Tooltip title="Add to Wishlist" placement='top' arrow style={{padding:'0px'}}>
                    <IconButton>
                      <LuHeartCrack/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Quick View" placement='top' arrow style={{padding:'0px'}}>
                    <IconButton>
                      <FaRegEye/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Share" placement='top' arrow style={{padding:'0px'}}>
                    <IconButton>
                      <TbBrandStackshare/>
                    </IconButton>
                </Tooltip>
                </div>
                </div>
                <span>{e.Categrey}</span>
                <p className='detail'>{e.Detail}</p>
                <div className='rating-sec'>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <span>{e.rating}</span>
                </div>
                <p style={{color:'darkgray'}}>By <span className='product-sec'>{e.Product}</span></p>
                <div className='price-sec'>
                  <div>
                    <span className='newprice'>{e.newPrice}</span>
                    <s><span className='oldprice'>{e.oldPrice}</span></s>
                    </div>
                <button><MdOutlineAddShoppingCart/>Add</button>
                </div>
                </div>

                </div>
               )
            })
        }
    </div>
    </div>
  )
}

export default Product