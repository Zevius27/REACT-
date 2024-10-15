
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import Card from './components/Card.jsx'
import TikTacToe from './components/TikTacToe.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
  {/* <App/>
  <Card/> */}
  <TikTacToe/>


  </> 
)
