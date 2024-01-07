import React from 'react'
import Slider from "react-slick";
import './ProductSecond.css'
import Obj from '../APIs/Product'
import { LuHeartCrack } from "react-icons/lu";
import { TbBrandStackshare } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
const ProductSecond = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade:false,
    arrows:true,
    autoplay:20000,
  };
  return (
    <div className="catSlidersection">
      <div className="conntainer-fluid">
        <div className="headingSec">
        <h1>
        Featured Categories
        </h1>
        <ul>
          <li> <button>Cack & Milk </button></li>
          <li> <button>Cofees & Teas</button></li>
          <li> <button style={{color:'#29A56C'}}>Pet Foods </button></li>
          <li> <button>Vegetables</button></li>
        </ul>
        </div>
      <div className="bannerImageRelative">
      <Slider {...settings} className='ProductSecond'>
        {
          Obj.map((e)=>{
            return(
              <div className='proSecond-sec'> 
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
        
      </Slider>
      <div className='bannerImageAbsolute'>
        <img src="\src\Images\img-1.png" alt="" />
      </div>
      </div>
      </div>
    </div>
  );
}

export default ProductSecond