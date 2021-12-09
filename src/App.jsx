import './style/style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <center className='fondo'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidxs a Baaxal' />
    </center>
  )
}

export default App
