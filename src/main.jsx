import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Common/Header.jsx'
import Ourfligths from './Common/Ourfligths.jsx'
import Loader from './Common/Loader.jsx'
import Menu from './Common/Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Loader/> */}
    {/* <Menu/> */}
    <Header/>
    <Ourfligths/>
    <App />
  </StrictMode>,
)
