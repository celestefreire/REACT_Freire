import React from 'react'
import ItemCount from './ItemCount'

const valorInicial = 1
const valorMaximo = 10

const ItemListContainer = ( {greeting} ) => {

    return (
        <div>
            { greeting }
            <ItemCount valorInicial={valorInicial} valorMaximo={valorMaximo} />
        </div>
    )
}

export default ItemListContainer
