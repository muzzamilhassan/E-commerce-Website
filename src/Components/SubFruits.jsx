import React from 'react'
import './SubFruits.css'
import Rating from '@mui/material/Rating';
const SubFruits = (props) => {
  return (
    <div className='fruits'>
        {/* <h1 className='heading'>{props.title}</h1> */}
        <div className="sub-fruits">
        <img src={props.img} alt="" />
        <div>
            <h1>{props.h1}</h1>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly style={{fontSize:'16px'}}/>
            <span>(4.0)</span>
            <div className='padding'>
                    <span className='newprice'>$23</span>
                    <s><span className='oldprice'>$34</span></s>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SubFruits