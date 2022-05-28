import React from 'react';
import ItemCount from "../itemCount/ItemCount";

const Item = ({producto}) => {
    const {name, stock, price, description, capacity, img} = producto
    return(
        <div className="card" style={{width:'18rem', margin:'.5rem'}}>
            <img src={img} className="card-img-top" alt={name} />
            <div className='card-body'>
                <p className='card-text'>{name}</p>
                <p className='card-text'>Tamaño: {capacity}</p>
                <p className='card-text'>Valor: ${price}</p>                
                <p className='card-text'>Stock disponible: {stock} u.</p>
                <p className='card-text'>Descripción: <br />{description}</p>
            </div>
            <ItemCount stock={stock} initial={0} onAdd={0}/>           
        </div>
    )
}

export default Item;