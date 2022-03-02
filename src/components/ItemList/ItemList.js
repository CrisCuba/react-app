import Item from "../Item/Item"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { db } from "../../firebase/config"
import { getDocs, query, collection, where } from "firebase/firestore"
import "./ItemList.css"

function ItemList() {
  const [productState, setProductState] = useState()
  const { categoryId } = useParams()

  useEffect(() => {
    const productosCollection = collection(db, "itemList")
    let consultaStock = ""
    if (categoryId) {
      consultaStock = query(
        productosCollection,
        where("stock", ">", 0)
      )
    } else {
      consultaStock = query(productosCollection, where("stock", ">", 0))
    }
      getDocs(consultaStock).then((docs) => {
      const arr = []
      docs.forEach((item) => {
        const data = item.data()
        arr.push(
          <Item
            stock={item.stock}
            productId={data.productId}
            name={data.name}
            price={data.price}
            description={data.description}
            imgUrl={data.imgUrl}
          />
        )
      })
      setProductState(arr)
    })
  }, [categoryId])

  return <div className="items-container">{productState}</div>
}

export default ItemList

