import './Card.css';
const Card = () => {
    let pizzas = [
        {id: 1, tipo: 'Muzzarella', precio: '$1200', img:"https://rankea.com.ar/wp-content/uploads/2019/05/pizza-muzzarella.jpg",},
        {id: 2, tipo: 'Especial', precio: '$1500', img:"https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg"},
        {id: 3, tipo: 'Fugazzeta', precio: '$2000', img:"https://cdn0.recetasgratis.net/es/posts/7/0/2/pizza_fugazza_7207_600.webp"},
        {id: 4, tipo: 'Crudo y Rúcula', precio: '$2500', img:"https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg"}
    ]
    
return ( 
    <div>
    {pizzas.map((pizza) => {
        return(
            <div key={pizza.id} className= 'card'>
                <h3 className= 'card-title'>{pizza.tipo}</h3>
                <h4 className= 'card-precio'>{pizza.precio}</h4>
                <img src={pizza.img} className= 'card-img'/>

            </div>
        )
    } )}
    </div>
)
}

export default Card
//Los props siempre van entre llaves
/*Paso la información del padre al hijo con la palabra props dentro de los parámentros de la función.
Después entre llaves */