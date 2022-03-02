import React from "react"
import "../Cart/Cart.css"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import OrderForm from "../OrderForm/OrderForm"

function Cart() {
  const { removeItem, itemList, clear, totalItems, totalPrice } = useCart()

  return (
    <div className="product-block">
      {itemList.length > 0 ? 
        <>
          {itemList.map((elem) => 
            <div key={elem.id}>
              <div className="product-container">
                <h1>
                  {elem.title} - {elem.quantity} unidades
                </h1>
                <div className="total-container">
                  <h1>${elem.price * elem.quantity}</h1>
                  <button
                    className="del-button"
                    onClick={() => removeItem(elem)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )}
          <h1>
            Subtotal: ${totalPrice()} ({totalItems()} unidades)
          </h1>
          <button className="empty" onClick={() => clear(itemList.elem)}>
            Vaciar carrito
          </button>
          <div className="campo">Ingresá tus datos para efectuar el pago.</div>

          <div className="buy-container">
            <OrderForm />
          </div>
        </>
       : 
        <>
          <h3 className="no-items">No hay productos en tu carrito.</h3>
          <Link to="/tienda">
            <button className="back-shop">Volver a la tienda</button>
          </Link>
        </>
      }
    </div>
  )
}

export default Cart
