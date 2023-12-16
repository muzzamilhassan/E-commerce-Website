import React from 'react'
import './NavbarStart.css'
import { IoIosArrowDown } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
const NavbarStart = () => {
  return (
    <div className='Start-section'>
        <button> 
            <CiGrid41 style={{
                fontSize:'30px',
                paddingBottom:'5px'
            }}/>
            Browse All Categrious
            <IoIosArrowDown/>
        </button>
        
    </div>
  )
}

export default NavbarStart