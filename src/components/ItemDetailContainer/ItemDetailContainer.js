import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../firebase/config'
import { collection, doc, getDoc } from "firebase/firestore"
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {

    const [item, setItem] = useState()

    const { itemId } = useParams()

    useEffect(() => {
        const productosCollection = collection(db, "itemList")
        const refDoc = doc(productosCollection, itemId)
        getDoc(refDoc).then(res => {
            const item = res.data()
            setItem(
                <ItemDetail
                   objeto={item}
                />
            )
        })
    }, [itemId])

    return(
        <>
            {item}
        </>
    )}