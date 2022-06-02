import React from 'react';
import ItemCount from "../itemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = ({producto}) => {
    const {id, name, stock, price, description, capacity, img} = producto
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
       
        alert("Se ha seleccionado " + qty + " artículos.");

        setItemCount(qty);              
    }
    return(
        <div className="card" style={{width:'18rem', margin:'.5rem'}}>
            <img src={img} className="card-img-top" alt={name} />
            <div className='card-body'>
                <p className='card-text'>{name}</p>
                <p className='card-text'>Tamaño: {capacity}</p>
                <p className='card-text'>Valor: ${price}</p>                
                <p className='card-text'>Stock disponible: {stock} u.</p>               
                <Link to={`/item/${id}`} className='btn bg-info card'>Detalles del producto</Link> 
               
            </div>
            <ItemCount stock={stock} initial={itemCount} onAdd={onAdd}/>           
        </div>
    )
}

export default Item;