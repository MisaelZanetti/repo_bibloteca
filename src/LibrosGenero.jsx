import React, { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function LibrosGenero() {
    const librosIniciales = useOutletContext()
    const {categoria} = useParams();
    const nombreCategoria = categoria === 'ficcion' ? 'Ficción' : 'No ficción'

    return (
        <div>
            <h1>Libros de {nombreCategoria}</h1>

            <ul>
                {librosIniciales.filter(i => i.categoria === nombreCategoria).map(libro => {
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