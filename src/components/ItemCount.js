import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const ItemCount = ({ stock = 0, initial =1, onAdd}) => {    
    const [cantidad, setCantidad]= useState(0);

    const increment = () => {
        if (cantidad < stock) setCantidad(cantidad + 1);
    }
    const decrement = () => {
        if (cantidad >= initial +1) setCantidad(cantidad - 1);
    }

    return(
        <div className='card col-3 card-body border-3'>            
            <p>{cantidad} productos</p>
            <div>
            <button type='button' className='btn btn-dark m-1 btn-xs' onClick={increment} >+</button>
            <button type='button' className='btn btn-success m-1 btn-xs'>Agregar al carrito</button>
            <button type='button' className='btn btn-dark m-1 btn-xs' onClick={decrement} >-</button>
            </div>            
        </div>
    );
}

export default ItemCount;