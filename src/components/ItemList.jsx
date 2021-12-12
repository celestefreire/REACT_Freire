import React from 'react'
import Item from './Item'

const ItemList = ( {productos} ) => {
    return (
        <>
        { productos.map((prod) => <Item prod={prod} /> )}
        </>  )
}

export default ItemList
