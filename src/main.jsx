import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import LibrosGenero from './LibrosGenero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="libros/:categoria" element={<LibrosGenero/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
