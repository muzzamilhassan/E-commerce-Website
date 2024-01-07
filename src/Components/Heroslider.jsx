import React from 'react'
import Slider from "react-slick";
import './Heroslider.css'
import { IoIosSend } from "react-icons/io";
const Heroslider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true,
        autoplay:2000
      };
  return (
    <Slider {...settings} className='SliderMain'>
      <div>
        <img src="\src\Images\slider-1.png" alt="logo" />
        <div className='SlideMain-sec'>
            <h1>Don’t miss amazing  <br />grocery deals</h1>
            <p>Sign up for the daily newsletter</p>
            <form action="">
           
                <IoIosSend/>
                <input type="text" name="email" id="email" placeholder='Your email Address'/>
                <button className='button'>Subscribe</button>
                
            </form>
        </div>
      </div>
      <div>
        <img src="\src\Images\slider-2.png" alt="logo" />
        <div className='SlideMain-sec'>
            <h1>Fresh Vegetables <br />Big discount</h1>
        <p>Save up to 50% off on your first order</p>
            <form action="">
            <IoIosSend/>
                <input type="text" name="email" id="email" placeholder='Your email Address' />
                <button>Subscribe</button>
            </form>
        </div>
      </div>
    </Slider>
  )
}

export default Heroslider