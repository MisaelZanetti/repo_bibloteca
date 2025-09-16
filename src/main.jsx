import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import LibrosFiccion from './LibrosFiccion'
import LibrosNoFiccion from './LibrosNoFiccion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="libros/ficcion" element={<LibrosFiccion/>} />
          <Route path="libros/no-ficcion" element={<LibrosNoFiccion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
