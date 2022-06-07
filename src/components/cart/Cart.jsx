import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import {Link} from 'react-router-dom';


const Cart = () =>{
    const test = useContext(CartContext);
    return(
        <div>
            {
                <div className='pt-5 flex-wrap justify-content-between d-flex'>
                {
                    (test.cartList.length > 0)
                   ? <button className='btn btn-danger m-1 btn-xs' onClick={test.removeList}>Vaciar carrito</button>
                   : <h3>No hay productos en el carrito</h3>
                }
                   <Link to='/'><button className='btn btn-primary m-1 btn-xs'>Seguir comprando</button></Link> 
                </div>
            }

            {                      
                test.cartList.map (item =>     
                <div className='row pt-5' key={item.idItem}>
                    <div className='col-md-4'>
                        <img className='card-img-top' style={{width:'10rem'}} src={item.imgItem} alt={item.nameItem} />                
                    </div>
                    <div className='card-text col-md-4'>
                        <p>Producto: {item.nameItem}</p>
                        <p>Precio: ${item.costItem}</p>
                        <p>Cantidad: {item.qtyItem}</p>                
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-danger m-1 btn-xs' onClick={() => test.deleteItem(item.idItem)}>Eliminar producto</button>
                    </div>                
                </div>            
                )            
            }
          
        </div>        
    );
}

export default Cart;