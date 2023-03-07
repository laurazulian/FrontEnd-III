import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    
    const [show, setShow] = (false)
    const handleSubmit = (e)=>{
        e.preventDefault()

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <input type="text" onChange={(e)=> setSurname(e.target.value)}/>
            <button>Enviar</button>
        </form>

        <h3>Tu nombre es: {name}</h3>
        <h3>Tu apellido es: {surname}</h3>
    </div>
  )
}

export default Form