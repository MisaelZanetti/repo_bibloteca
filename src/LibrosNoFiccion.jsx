import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function LibrosNoFiccion() {
    const librosIniciales = useOutletContext()
    console.log(librosIniciales);


    return (
        <div>
            <h1>Libros de no ficción</h1>

            <ul>
                {librosIniciales.filter(i => i.categoria === 'No ficción').map(libro => {
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
