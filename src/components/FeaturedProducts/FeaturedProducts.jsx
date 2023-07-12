import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card"

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img: "",
            img2: "",
            title: "Jeans",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id:2,
            img: "",
            img2: "",
            title: "Jeans",
            isNew: true,
            oldPrice: 20,
            price: 13
        },
        {
            id:3,
            img: "",
            title: "Jeans",
            oldPrice: 18,
            price: 11
        },
        {
            id:4,
            img: "",
            title: "Jeans",
            oldPrice: 17,
            price: 9
        }
    ];

  return (
    <div className="featuredProducts">
        <div className='top'>
            <h1>{type} products</h1>
            <p>
            Nothing beats the classic look of  a pair of jeans. That's why we have a wide selection of straight-leg jeans, featuring a comfortable fit and a timeless style. Whether you prefer light or dark washes, you'll find your ideal pair here.
            </p>
        </div>
        <div className="bottom">
            {data.map(item => {
               return  <Card item={item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default FeaturedProducts
