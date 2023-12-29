import React from 'react'
import './Banner.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
        <div className="Banner-sec">
            <div className="sub-banner">
                <img src="\src\Images\banner-1.png" alt="BannerLogo" />
                <div className="absolute">
                <h5>Everyday Fresh & <br />Clean with Our <br />Products</h5>
                <button>Shop Now<FaArrowRightLong/></button>
                </div>
            </div>
            <div className="sub-banner">
                <img src="\src\Images\banner-2.png" alt="BannerLogo" />
                <div className='absolute'>
                <h5>Make your Breakfast <br />Healthy and Easy</h5>
                <button>Shop Now<FaArrowRightLong/></button>
                </div>
            </div>
            <div className="sub-banner">
                <img src="\src\Images\banner-3.png" alt="BannerLogo" />
                <div className='absolute'>
                <h5>The best Organic <br />Products Online</h5>
                <button>Shop Now<FaArrowRightLong/></button>
                </div>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Banner