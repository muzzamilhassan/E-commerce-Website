import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Credit from './Credit'
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
          <div className="subfooter">
            <Link to="/"><img src="\src\Images\logo.svg" alt="" /></Link>
            <p>Awesome grocery store website template</p>
            <div>
              <p><img src="\src\Images\icon-location.svg" alt="" /><span>Address:</span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
              <p><img src="\src\Images\icon-contact.svg" alt="" /><span>Call Us:</span>+92-3055779207</p>
              <p><img src="\src\Images\icon-email-2.svg" alt="" /><span>Email:</span>muzzamilhassan302@gmail.com</p>
              <p><img src="\src\Images\icon-clock.svg" alt="" /><span>Hours:</span>09:00-12:00,MON,FRI</p>
              
            </div>
          </div>
          <div className="subfooter">
            <h1>Company</h1>
            <ul>
                <li><Link to='/'>AboutUs</Link></li>
                <li><Link to='/'>Delivery Information</Link></li>
                <li><Link to='/'>Privacy Policy</Link></li>
                <li><Link to='/'>Terms & Conditions</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
                <li><Link to='/'>Support Center</Link></li>
                <li><Link to='/'>Careers</Link></li>
            </ul>
          </div>
          <div className="subfooter">
          <h1>Account</h1>
            <ul>
                <li><Link to='/'>Sign In</Link></li>
                <li><Link to='/'>View Cart</Link></li>
                <li><Link to='/'>My Wishlist</Link></li>
                <li><Link to='/'>Track My Order</Link></li>
                <li><Link to='/'>Help Ticket</Link></li>
                <li><Link to='/'>Shipping Details</Link></li>
                <li><Link to='/'>Compare products</Link></li>
            </ul>
          </div>
          <div className="subfooter">
          <h1>Corporate</h1>
            <ul>
                <li><Link to='/'>Become a Vendor</Link></li>
                <li><Link to='/'>Affiliate Program</Link></li>
                <li><Link to='/'>Farm Business</Link></li>
                <li><Link to='/'>Farm Careers</Link></li>
                <li><Link to='/'>Our Suppliers</Link></li>
                <li><Link to='/'>Accessibility</Link></li>
                <li><Link to='/'>Promotions</Link></li>
            </ul>
          </div>
          <div className="subfooter">
          <h1>Popular</h1>
            <ul>
                <li><Link to='/'>Milk & Flavoured Milk</Link></li>
                <li><Link to='/'>Butter and Margarine</Link></li>
                <li><Link to='/'>Eggs Substitutes</Link></li>
                <li><Link to='/'>Marmalades</Link></li>
                <li><Link to='/'>Sour Cream and Dips</Link></li>
                <li><Link to='/'>Tea & Kombucha</Link></li>
                <li><Link to='/'>Cheese</Link></li>
            </ul>
          </div>
        </footer>
        <Credit/>
    </div>
  )
}

export default Footer