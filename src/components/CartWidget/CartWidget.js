import "./CartWidget.css"
import { useCart } from "../../context/CartContext"

function CartIcon(props) {
  const { totalItems } = useCart()
  if (totalItems() >= 0) {
    return (
      <div className="cart-icon-container">
        <img className="cart-icon"  
        {...props}
        src="https://img.icons8.com/material-outlined/48/000000/shopping-cart--v1.png">
        </img>
        <p className="cart-quantity">{totalItems()}</p>
      </div>
    )
  } else {
    return <></>
  }
}

export default CartIcon
