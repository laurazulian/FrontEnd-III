import React, { useState } from 'react'

const Form = () => {
    const [person, setPerson] = useState({
    name:'',
    surname:''
    })
    
    const [show, setShow] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (person.name.lenght > 3) setShow(true);
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
        <div>
          <h3>Tu nombre es: {person.name}</h3>
          <h3>Tu apellido es: {person.surname}</h3>
        </div>
        :
        null
        }

        
    </div>
  )
}

export default Form