import React from "react"
import "../Item/Item.css"
import { Link } from "react-router-dom"

function Item({ name, price, imgUrl, productId }) {
  return (
    <div className="items-category-container">
      <div className="item">
        <div className="name">{name}</div>
        <Link to={`/item/${productId}`}>
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="img">
        </div>
        </Link>
        <div className="price">${price}</div>
        <div className="button-container">
          <Link to={`/item/${productId}`}>
            <button className="button">Comprar</button>
          </Link>
        </div>
      </div>
    </div>
  ) 
}


export default Item
