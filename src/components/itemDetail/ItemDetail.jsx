import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({articulos}) => {
    
    return(
        <div className='row pt-5'>
            <div className='card-body col-md-8'>
                <img className='card-img-center' style={{width:'45rem'}} src={articulos.img}  alt={articulos.name} />
            </div>
            <div className='card-text text-start col-md-4' style={{width:'25rem'}}>
                <h3>{articulos.name}</h3>
                <p>Detalles: <br/>{articulos.description}</p>
                <p>Precio: ${articulos.price}</p>
                <p>Cantidad: {articulos.stock} unidades en stock</p>
                <ItemCount stock={articulos.stock} initial={0} onAdd={0}/>
            </div>
        </div>
    )
}

export default ItemDetail;