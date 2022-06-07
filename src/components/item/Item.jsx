import React, { useContext } from 'react';
import ItemCount from "../itemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from "../context/CartContext";

const Item = ({item}) => {    
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
       
        alert("Se ha seleccionado " + qty + " artículos.");

        setItemCount(qty);
        
        test.addToCart(item, qty);
    }
    return(
        <div className="card" style={{width:'18rem', margin:'.5rem'}}>
            <img src={item.img} className="card-img-top" alt={item.name} />
            <div className='card-body'>
                <p className='card-text'>{item.name}</p>
                <p className='card-text'>Tamaño: {item.capacity}</p>
                <p className='card-text'>Valor: ${item.price}</p>                
                <p className='card-text'>Stock disponible: {item.stock} u.</p>               
                <Link to={`/item/${item.id}`} className='btn bg-info card'>Detalles del producto</Link>    
            </div>
            <div>
                {
                itemCount === 0
                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                : <Link to= '/cart'><button className="btn btn-dark">Abonar</button>
                </Link>
                }
            </div>             
        </div>
    )
}

export default Item;