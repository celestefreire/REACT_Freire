import React from 'react'
import {useState, useEffect} from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const valorInicial = 1
const valorMaximo = 10

const ItemListContainer = ( {greeting} ) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            { greeting }
            { loading ? <h2>Cargando...</h2>
            : <ItemList productos={productos} />
}
            <ItemCount valorInicial={valorInicial} valorMaximo={valorMaximo} />
        </div>

    )}

export default ItemListContainer
