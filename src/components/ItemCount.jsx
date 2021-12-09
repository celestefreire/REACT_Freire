import React from 'react'
import { useState } from 'react'

const ItemCount = ({valorInicial, valorMaximo}) => {

    

    const [valor, setValor] = useState(valorInicial)

    const botonSuma = () => {
        valor < valorMaximo ? setValor(valor + 1) : alert(`Superaste el stock disponible`)
    }

    const botonResta = () => {
        valor > valorInicial ? setValor(valor - 1) : alert(`No podemos sumar menos de 1 producto al carrito`)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="divItemCount col-md-2 offset-md-5">
            
                <button className="btn btn-violeta btn-sm btnSuma" onClick={botonSuma}>+</button>
                <h1 className="btn btn-contador btn-lg disabled">{valor}</h1>
                <button className="btn btn-violeta btn-sm btnResta" onClick={botonResta}>-</button>
                <button className="btn btn-outline-naranja">Agregar al Carrito</button>
                
                </div>
            </div>
        </div>
    )
}

export default ItemCount
