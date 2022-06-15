import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import {Link} from 'react-router-dom';


const Cart = () =>{
    const test = useContext(CartContext);
    return(
        <div className="container-fluid">
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
                    <div className='col-md-5'>
                        <img className='card-img-top' style={{width:'10rem'}} src={item.imgItem} alt={item.nameItem} />                
                        {/* <img src={item.imgItem} alt={item.nameItem}/>                 */}
                    </div>
                    <div className='card-text col-md-5'>
                        <p>Producto: {item.nameItem}</p>
                        <p>Precio: ${item.costItem}</p>
                        <p>Cantidad: {item.qtyItem}</p>
                        <button className='btn btn-danger m-1 btn-xs' onClick={() => test.deleteItem(item.idItem)}>Eliminar producto</button>                
                    </div>                    
                </div>            
                )            
            }

            {   (test.cartList.length > 0)
                ? <div className='card card-body col-md-4 mx-auto mt-3'>                    
                    <h3>Orden de compra</h3>
                    <p>Subtotal: ${test.subTotal()}</p>
                    <p>IVA: ${test.calcIva()}</p>
                    <p>Descuento de IVA: -${test.calcIva()}</p>
                    <p>Total: ${test.total()}</p>
                    <button className='btn btn-dark m-1 btn-xs'>Finalizar compra</button>
                </div>
                : <div className='card bg-danger text-center card-body col-md-6 mx-auto mt-3'><h2>Debería comprar algo!!!</h2></div>
            }
          
        </div>        
    );
}

export default Cart;