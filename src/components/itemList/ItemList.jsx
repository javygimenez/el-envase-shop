import React from 'react';
import Item from '../item/Item';

const ItemList = ({ items }) => {
    return(
        <>
        <h3>Elija su producto:</h3>
        <div className='d-flex justify-content-between flex-wrap'>            
            {items.map(item => <Item key={item.id} id={item.id} item={item}/>)}
        </div>
        </>
    )
}

export default ItemList;