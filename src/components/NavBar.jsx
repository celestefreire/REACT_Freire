import React from 'react'
import {Navbar } from 'react-bootstrap'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navFondo">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
        Baaxal
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Nuestros Juegos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">¿Cómo comprar?</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Carrito</a>
        </li>
    </ul>
    
    </div>
    
    </div>
    <CartWidget/>
</nav>

        </div>
    )
}

export default NavBar
