import React, { useEffect } from 'react'
import '../Components/Header.css'
import Categaries from './Categaries'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import axios from 'axios'
import { Link } from 'react-router-dom';
const Header = () => {
    const list = [
        
         'Milks and Dairies',
         'Wines & Alcohol',
         'Clothing & Beauty',
         'Pet Foods & Toy',
         'Fast food',
         'Baking material',
         'Vegetables',
         'Fresh Seafood',
         'Noodles & Rice',]

    const countryList = []
    useEffect(()=>{
        getcountry("https://countriesnow.space/api/v0.1/countries")
    },[])
    const getcountry = async (URL)=>{
        try {
            await axios.get(URL).then((res)=>{
              
                // console.log(res.data.data);
                res.data.data.map((item)=>{
                    countryList.push(item.country)
                })
            })
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className='header'>
        <div className='header-start'>
            <Link to="/">
            <img src="\src\Images\logo.svg" alt="logo"  width='70%'/>
            </Link>
        </div>
        <div className='header-middle'>
            <Categaries data={list} placeholder={'All Categrious'}/> 
            <IoIosArrowDown/> |
            <input type="search" name="search" id="" placeholder='Search for items...'/>
            <span>
                <CiSearch className='Search-icon'/>
            </span>
        </div>
        <div className='country-data'>
        <Categaries data={countryList} placeholder={'Your Location'}/>
        </div>
        <div className='header-end'>
            
            <span>
                <img src="\src\Images\icon-compare.svg" alt="cart-icon" />
                Compare
            </span>
            <span>
                <img src="\src\Images\icon-heart.svg" alt="cart-icon" />
                Wishlist
            </span>
            <span>
                <img src="\src\Images\icon-cart.svg" alt="cart-icon" />
                Cart
            </span>
            <span>
                <img src="\src\Images\icon-user.svg" alt="cart-icon" />
                Compare
            </span>
        </div>
    </div>
  )
}

export default Header