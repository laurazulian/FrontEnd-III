import React from 'react'

const NavBar = () => {

    let titulos = ['Home', 'Variedades', 'Sobre Nosotros', 'Contacto']


return (
    <div>
        <ul>
            {titulos.map((titulo, i)=> <p key={i}>{titulo}</p>)}
        </ul>
    </div>
)
}

export default NavBar

/*Dentro del map se hace un callback, que recibe dos parámetros:
El primero es el contenido del array que está iterando
El segundo es esl índice
Siempre colocar la propuedad key y darle un identificador único. La key va cada vez que mapeamos.
*/