import { useState, useContext } from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
       
        alert("Se ha seleccionado " + qty + " artículos.");

        setItemCount(qty);
        
        test.addToCart(item, qty);
    }
    
    
    return(
        <div className='row pt-5'>
            <div className='card-body col-md-8'>
                <img className='card-img-center' style={{width:'45rem'}} src={item.img}  alt={item.name} />
            </div>
            <div className='card-text text-start col-md-4' style={{width:'25rem'}}>
                <h3>{item.name}</h3>
                <p>Detalles: <br/>{item.description}</p>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.stock} unidades en stock</p>
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                    : <Link to='/cart'><button className='btn btn-dark'>Abonar</button></Link>                    
                }                
            </div>
        </div>
    )
}

export default ItemDetail;