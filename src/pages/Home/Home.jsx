import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Contact from '../../components/Contact/Contact'
const Home = () =>{
    return (
        <div className='home'>
            <Slider></Slider>
            <FeaturedProducts type="Sale"/>
            <Contact></Contact>
        </div>
    )
}

export default Home