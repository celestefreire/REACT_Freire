import './style/style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div className='fondo'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidxs a Baaxal' />
    </div>
  )
}

export default App
