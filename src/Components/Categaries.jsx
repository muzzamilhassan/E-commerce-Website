import React, { useState } from 'react'
import './Categaries.css'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
const Categaries = ({data,placeholder}) => {
    const [open,setOpen]=useState(false)
    const [selectItem,setSelectItem]=useState(placeholder)
    // const list = ['All Categories', 'Milks and Dairies','Wines & Alcohol','Clothing & Beauty','Pet Foods & Toy','Fast food','Baking material','Vegetables','Fresh Seafood','Noodles & Rice','']
  return (
    <ClickAwayListener onClickAway={()=>{
        setOpen(false)
    }}>
   <div className='categroies'>
    <div
    onClick={()=>{
        setOpen(!open)
    }}
    >{selectItem}</div>
    {open && <div className='categroies-start'>
        <span>
            <input type="search" name="search" id="" placeholder='Search here...' style={{backgroundColor:'white',border: '2px solid #BCE3C9',width:'100%',padding:'5px',borderRadius:'5px'}}/>
        </span>
        <div className='Categroies-scroll'>
        <ul>
            {
            data.map((e)=>(
                <li onClick={()=>{
                    setOpen(false)
                    setSelectItem(e)
                }}>{e}</li>
            ))
            }
        </ul>
        </div>
    </div>}
   </div>
   </ClickAwayListener>
  )
}

export default Categaries