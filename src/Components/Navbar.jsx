import React, { useState } from 'react'
import NavbarStart from './NavbarStart'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { LiaHotjar } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Megamenu from './megamenu';
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <div>
        <div className="navbar">
                    <div className="start">
                    <NavbarStart/>
                    </div>
                    <div className="middle">
                    <ul>
                      <li>                        
                          <Link><LiaHotjar style={{
                            color:'#29A56C',
                            fontSize:'25px',
                            paddingBottom:'2px'
                          }}/>Deals</Link>
                      </li>
                      
                      <li>                        
                          <Link>Home<IoIosArrowDown/></Link>  
                          
                           <div className='subabout'>
                            <ul>
                              <li><Link to="/About" onClick={()=>setOpen(!open)}>About Us</Link></li>
                              <li><Link to="">Contact Us</Link></li>
                              <li><Link to="">My Account</Link></li>
                              <li><Link to="">Login</Link></li>
                              <li><Link to="">Register</Link></li>
                              <li><Link to="">Forgetten Password</Link></li>
                              <li><Link to="">Rest Password</Link></li>
                              <li><Link to="">Purchase Guide</Link></li>
                              <li><Link to="">Privacy Policy</Link></li>
                              <li><Link to="">Term of Service</Link></li>
                              <li><Link to="">404 Page</Link></li>
                            </ul>
                          </div>
                                             
                      </li>
                      <li>
                          <Link>About</Link>
                      </li>
                      <li>
                          <Link>Shop<IoIosArrowDown/></Link>
                          <div className='subabout'>
                            <ul>
                              <li><Link to="/About" onClick={()=>{setOpen(!open)}}>About Us</Link></li>
                              <li><Link to="">Contact Us</Link></li>
                              <li><Link to="">My Account</Link></li>
                              <li><Link to="">Login</Link></li>
                              <li><Link to="">Register</Link></li>
                              <li><Link to="">Forgetten Password</Link></li>
                              <li><Link to="">Rest Password</Link></li>
                              <li><Link to="">Purchase Guide</Link></li>
                              <li><Link to="">Privacy Policy</Link></li>
                              <li><Link to="">Term of Service</Link></li>
                              <li><Link to="">404 Page</Link></li>
                            </ul>
                          </div>
                      </li>
                      
                      <li>
                          <Link>Venders<IoIosArrowDown/></Link>
                          <div className='subabout'>
                            <ul>
                              <li><Link to="/About" onClick={()=>setOpen(!open)}>About Us</Link></li>
                              <li><Link to="">Contact Us</Link></li>
                              <li><Link to="">My Account</Link></li>
                              <li><Link to="">Login</Link></li>
                              <li><Link to="">Register</Link></li>
                              <li><Link to="">Forgetten Password</Link></li>
                              <li><Link to="">Rest Password</Link></li>
                              <li><Link to="">Purchase Guide</Link></li>
                              <li><Link to="">Privacy Policy</Link></li>
                              <li><Link to="">Term of Service</Link></li>
                              <li><Link to="">404 Page</Link></li>
                            </ul>
                          </div>
                      </li>
                      <li>
                          <Link>Mega menu<IoIosArrowDown/></Link>
                          <div className='subabout' style={{width:'100vw', left:'-55vw', paddingBottom:'90px',paddingTop:'30px'}}>
                            {/* <Megamenu/> */}
                            <ul style={{marginLeft:'50px'}}>
                              <li className='menuHead'>Fruit & Vegetables</li>
                              <li><Link to="/About" onClick={()=>setOpen(!open)}>Meat & Poultry</Link></li>
                              <li><Link to="">Fresh Vegetables</Link></li>
                              <li><Link to="">Herbs & Seasonings</Link></li>
                              <li><Link to="">Cuts & Sprouts</Link></li>
                              <li><Link to="">Exotic Fruits & Veggies</Link></li>
                              <li><Link to="">Packaged Produce</Link></li>
                              
                            </ul>
                            <ul style={{marginLeft:'10px'}}>
                            <li className='menuHead'>Breakfast & Dairy</li>
                              <li><Link to="/About" onClick={()=>setOpen(!open)}>Milk & Flavoured Milk</Link></li>
                              <li><Link to="">Butter and Margarine</Link></li>
                              <li><Link to="">Eggs Substitutes</Link></li>
                              <li><Link to="">Marmalades</Link></li>
                              <li><Link to="">Sour Cream</Link></li>
                              <li><Link to="">Cheese</Link></li>
                              
                            </ul>
                            <ul style={{marginLeft:'10px'}}>
                            <li className='menuHead'>Meat & Seafood</li>
                              <li><Link to="/About" onClick={()=>setOpen(!open)}>Breakfast Sausage</Link></li>
                              <li><Link to="">Dinner Sausage</Link></li>
                              <li><Link to="">Chicken</Link></li>
                              <li><Link to="">Sliced Deli Meat</Link></li>
                              <li><Link to="">Wild Caught Fillets</Link></li>
                              <li><Link to="">Crab and Shellfish</Link></li>
                              
                            </ul>
                            
                            <ul style={{marginLeft:'50px'}}>
                              <li>
                                <div className='imgdata' style={{position:'relative'}}>
                                  <img src="\src\Images\banner-menu.png" alt="banner-menu" style={{position:'absolute',top:'-200px'}}/>
                                  <div style={{position:'absolute'}}>
                                    <div style={{backgroundColor:'#FFD55A',padding:'20px 30px',borderRadius:'50%',position:'absolute',bottom:'50px',left:'350px'}}>
                                      <h3 style={{}}>25% <br /> <span style={{fontSize:'25px'}}>off</span></h3>
                                    </div>
                                    <div style={{position:'absolute',whiteSpace:'nowrap',bottom:'-60px',left:'20px'}}>
                                    <span>HOT DEALS</span>
                                    <h3>Don't miss <br />
                                    Trending</h3>
                                    <h2 style={{color:'#81B13D'}}>Save to 50%</h2>
                                    <button className='button'>Shop Now</button>
                                    </div>
                                  </div>
                                </div>
                                </li> 
                            </ul>
                          </div>
                      </li>
                      <li>
                          <Link>Blog<IoIosArrowDown/></Link>
                          <div className='subabout' style={{gap:'10px'}}>
                            <ul>
                              <li><Link to="/About" onClick={()=>setOpen(!open)}>About Us</Link></li>
                              <li><Link to="">Contact Us</Link></li>
                              <li><Link to="">My Account</Link></li>
                              <li><Link to="">Login</Link></li>
                              <li><Link to="">Register</Link></li>
                              <li><Link to="">Forgetten Password</Link></li>
                              <li><Link to="">Rest Password</Link></li>
                              <li><Link to="">Purchase Guide</Link></li>
                              <li><Link to="">Privacy Policy</Link></li>
                              <li><Link to="">Term of Service</Link></li>
                              <li><Link to="">404 Page</Link></li>
                            </ul>
                          </div>
                      </li>
                      <li>
                          <Link>Pages<IoIosArrowDown/></Link>
                          <div className='subabout'>
                            <ul>
                              <li><Link to="/About" onClick={()=>setOpen(!open)}>About Us</Link></li>
                              <li><Link to="">Contact Us</Link></li>
                              <li><Link to="">My Account</Link></li>
                              <li><Link to="">Login</Link></li>
                              <li><Link to="">Register</Link></li>
                              <li><Link to="">Forgetten Password</Link></li>
                              <li><Link to="">Rest Password</Link></li>
                              <li><Link to="">Purchase Guide</Link></li>
                              <li><Link to="">Privacy Policy</Link></li>
                              <li><Link to="">Term of Service</Link></li>
                              <li><Link to="">404 Page</Link></li>
                            </ul>
                          </div>
                      </li>
                      <li>
                          <Link>Contact</Link>
                      </li>
                    </ul>
                    </div>
                    <div className="end">
                      <img src="\src\Images\icon-headphone.svg" alt="" />
                    <div className='endData'>
                    <h1>1900 - 888</h1>
                    <span>24/7 Support Center</span>
                    </div>
                    </div>
        </div>
    </div>
  )
}

export default Navbar