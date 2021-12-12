



const productos = [
    {id: 1, imagen: '../imagenes/copitredia_02_1200-1200-min.jpg' , nombre: "Copitredia" , descripcion: "larala" , categoria: "Cartas" },
    {id: 2, imagen: '../imagenes/cromatismo_01_1200-1200-min.jpg' , nombre: "Cromatismo" , descripcion: "larala" , categoria: "Cartas" },
    {id: 3, imagen: '../imagenes/anexiones_02_1200-1200-min.jpg' , nombre: "Anexiones" , descripcion: "larala" , categoria: "Cartas" }
]

export const getFetch = new Promise ((resolve) => {

    setTimeout( () => {
        resolve(productos)}, 3000)

})