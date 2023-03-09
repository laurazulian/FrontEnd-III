import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [person, setPerson] = useState({
    name:'',
    surname:''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const nameWithoutSpaces = person.name.trim()

        const surnameWithoutSpaces = person.surname.trim()
    
        if(nameWithoutSpaces.length > 3 
          && surnameWithoutSpaces.length > 6){     
          setShow(true)
        } else {
          setError(true)
        } 
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={(e)=> setPerson({...person, name: e.target.value})}/>
            <label htmlFor="">Apellido</label>
            <input type="text" onChange={(e)=> setPerson({...person, surname: e.target.value})}/>
            <button>Enviar</button>
        </form>

        {show 

        ? 
        <Card
          name= {person.name}
          surname = {person.surname}
        >
        </Card>
        :
        null

        }

        {
        error
        &&
        <div>
          <p>Por favor chequea que la información sea correcta.</p>
        </div>
      }
        
    </div>
  )
}

export default Form
