import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function LibrosFiccion() {
    const librosIniciales = useOutletContext()


    return (
        <div>
            <h1>Libros de Ficción</h1>

            <ul>
                {librosIniciales.filter(i => i.categoria === 'Ficción').map(libro => {
                    return (
                        <div>
                            <p>{libro.titulo}</p>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}