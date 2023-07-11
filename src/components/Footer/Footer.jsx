import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EuroIcon from '@mui/icons-material/Euro';
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
          Jeanstore is the online store from Lviv that sells high-quality jeans for every style and occasion. Shop our wide range of sizes, colors, and fits, and find your perfect pair today. Jeanstore - the ultimate destination for denim lovers.
          </span>
        </div>
        <div className='item'>
        <h1>Contact</h1>
          <span>
          Lviv, s. Bazarna 19
          </span>
          <span>
            + 380 97 579 55 14
          </span>
        </div>

      </div>
      <div className='bottom'>
          <div className="left">
            <span className='logo'>Jeanstore</span>
            <span className='copyright'>
              Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <CreditCardIcon></CreditCardIcon>
            <EuroIcon></EuroIcon>
          </div>
      </div>
    </div>
  )
}

export default Footer
