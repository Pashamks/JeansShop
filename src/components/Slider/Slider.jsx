import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import SimpleBlue from "../../img/simple-blue.jpg"
import PocketDark from "../../img/pockets-dark.jpg"
import WideBlue from "../../img/wide-blue.jpg"
import SimpleDark from "../../img/simple-dark.jpg"
import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data =[
        SimpleBlue,
        PocketDark,
        WideBlue,
        SimpleDark
    ]
  const prevSlide = () =>{
    setCurrentSlide(currentSlide===0 ? 3 : (prev) => prev - 1)
  };
  const nextSlide = () =>{
    setCurrentSlide(currentSlide===3 ? 0 : (next) => next + 1)
  };
  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        <img className="img" src={data[0]}></img>
        <img className="img" src={data[1]}></img>
        <img className="img" src={data[2]}></img>
        <img className="img" src={data[3]}></img>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestIcon></WestIcon>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastIcon></EastIcon>
        </div>
      </div>
    </div>
  )
}

export default Slider
