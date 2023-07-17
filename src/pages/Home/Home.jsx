import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

const Home = () =>{
    return (
        <div className='home'>
            <Slider></Slider>
            <FeaturedProducts type="Sale"/>
        </div>
    )
}

export default Home