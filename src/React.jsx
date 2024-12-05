import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Main.css'
import Main from './App'
import Playbar from './Playbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
    <Playbar />
  </StrictMode>,
)
