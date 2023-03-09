//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({name, surname}) => {

    return (

    <div>
        <h3>Tu nombre es: {name}</h3>
        <h3>Tu apellido es: {surname}</h3>
    
      </div>
    )
  }
  
  export default Card;
