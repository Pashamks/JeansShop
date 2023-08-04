import React, { useState } from 'react'
import './Products.scss'
import List from "../../components/List/List"
import { useParams } from 'react-router-dom'
const Products = () =>{

    const categoryId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className='inputItem'>
                        <input type='checkbox' id="1" value={1}></input>
                        <label htmlFor='1'>Jeans</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id="2" value={2}></input>
                        <label htmlFor='2'>Trousers</label>
                    </div>
                    <div className='inputItem'>
                        <input type='checkbox' id="3" value={3}></input>
                        <label htmlFor='3'>Leggings</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value="asc" name='price' />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='desc' value="desc" name='price' />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <List></List>
            </div>
        </div>
    )
}

export default Products