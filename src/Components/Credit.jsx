import React from 'react'
import './Credit.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Credit = () => {
  return (
    <div>
        <div className="Credit">
            <h1>muzzailhassan302@gmail.com</h1>
            <h1><FaPhoneVolume/>+923159887254</h1>
                <ul>
                    <li>
                        <Link to='https://www.facebook.com/muzzamil.hassan.758' target='_blank'><FaFacebook/></Link>
                    </li>
                    <li>
                        <Link to='https://twitter.com/m83238_e' target='_blank'><FaTwitter/></Link>
                    </li>
                    <li>
                        <Link to='https://www.instagram.com/muzzamilhassa348/' target='_blank'><FaInstagram/></Link>
                    </li>
                    <li>
                        <Link to='https://www.linkedin.com/in/muzzamil-hassan-820a79287/' target='_blank'><FaLinkedin/></Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/channel/UCFhDqZsnGJI9WrhE7JL8jRg' target='_blank'><FaYoutube/></Link>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Credit