import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import Featured1 from "../../img/featured1.jpg"
import Featured12 from "../../img/featured1-2.jpg"
import Featured2 from "../../img/featured2.jpg"
import Featured22 from "../../img/featured2-2.jpg"
import Featured3 from "../../img/featured3.jpg"
import Featured4 from "../../img/featured4.jpg"
const List = () => {
    const data = [
        {
            id:1,
            img: Featured1,
            img2: Featured12,
            title: "Jeans",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id:2,
            img: Featured2,
            img2: Featured22,
            title: "Jeans",
            isNew: true,
            oldPrice: 20,
            price: 13
        },
        {
            id:3,
            img: Featured3,
            title: "Jeans",
            oldPrice: 18,
            price: 11
        },
        {
            id:4,
            img: Featured4,
            title: "Jeans",
            oldPrice: 17,
            price: 9
        }
    ];
  return (
    <div className='list'>
      {data?.map(item=>(<Card item={item} key = {item.key}></Card>))}
    </div>
  )
}

export default List
