import { useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({articulos}) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
       
        alert("Se ha seleccionado " + qty + " artículos.");

        setItemCount(qty);              
    }
    
    
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
                {
                    itemCount === 0
                    ? <ItemCount stock={articulos.stock} initial={itemCount} onAdd={onAdd}/>
                    : <Link to='/cart'><button className='btn btn-dark'>Abonar</button></Link>                    
                }                
            </div>
        </div>
    )
}

export default ItemDetail;