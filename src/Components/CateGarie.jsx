import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import './CateGarie.css'
const CateGarie = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade:false,
    arrows:true,
    autoplay:2000,
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
      <Slider {...settings} className='CateMain'>
        <div className="items">
          <img src="\src\Images\cat-5.png" alt="images" />
          <h6><Link>Custard apple</Link></h6>
          <span>120 items</span>
        </div>
        
        <div className="items">
          <img src="\src\Images\cat-1.png" alt="images" />
          <h6><Link>Vegetables</Link></h6>
          <span>89 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-15.png" alt="images" />
          <h6><Link>Headphone</Link></h6>
          <span>78 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-14.png" alt="images" />
          <h6><Link>Coffe & Tea</Link></h6>
          <span>12 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-13.png" alt="images" />
          <h6><Link>Cake & Milk</Link></h6>
          <span>95 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-12.png" alt="images" />
          <h6><Link>Oganic Kiwi</Link></h6>
          <span>78 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-11.png" alt="images" />
          <h6><Link>Peach</Link></h6>
          <span>9 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-9.png" alt="images" />
          <h6><Link>Red Apple</Link></h6>
          <span>23 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-5.png" alt="images" />
          <h6><Link>Custard apple</Link></h6>
          <span>94 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-4.png" alt="images" />
          <h6><Link>Black plum</Link></h6>
          <span>34 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-3.png" alt="images" />
          <h6><Link>Snack</Link></h6>
          <span>63 items</span>
        </div>
        <div className="items">
          <img src="\src\Images\cat-2.png" alt="images" />
          <h6><Link>Strawberry</Link></h6>
          <span>12 items</span>
        </div>
      </Slider>
      </div>
    </div>
  );
}

export default CateGarie