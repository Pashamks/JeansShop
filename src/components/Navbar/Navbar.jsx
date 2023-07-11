import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='wrapper'>
        <div className='left'>
            <div className="item">
                <LanguageIcon/>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </div>
            <div className="item">
                <span>UAH</span>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </div>
            <div className="itme">
                <Link className='link' to="/products/1">Women</Link>
            </div>
            <div className="itme">
                <Link className='link' to="/products/2">Men</Link>
            </div>
            <div className="itme">
                <Link className='link' to="/products/3">Children</Link>
            </div>
        </div>
        <div className='center'>
            <div className="itme">
                <Link className='link' to="/">JEANSTORE</Link>
            </div>
        </div>
        <div className='right'>    
            <div className="itme">
                <Link className='link' to="/">Homepage</Link>
            </div>
            
            <div className="itme">
                <Link className='link' to="/">About</Link>
            </div>
            
            <div className="itme">
                <Link className='link' to="/">Contact</Link>
            </div>
            
            <div className="itme">
                <Link className='link' to="/">Stores</Link>
            </div>
            <div className="icons"> 
                <SearchIcon></SearchIcon>
                <PersonIcon></PersonIcon>
                <FavoriteBorderIcon></FavoriteBorderIcon>
                <div className="carsIcon">  
                    <ShoppingCartIcon/>
                    <span>0</span>
                </div>
            </div>
        </div>
        </div>        
      </div>
    </div>
  )
}

export default Navbar
