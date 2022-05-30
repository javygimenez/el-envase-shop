import React from 'react';
import Item from '../item/Item';

const ItemList = ({ articulos }) => {
    return(
        <>
        <h3>Elija su producto:</h3>
        <div className='d-flex justify-content-between flex-wrap'>            
            {articulos.map((producto) => <Item key={producto.id} id={producto.id} producto={producto}/>)}
        </div>
        </>
    )
}

export default ItemList;