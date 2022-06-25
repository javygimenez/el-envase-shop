import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import {Link} from 'react-router-dom';
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import db from "../../utils/fireBaseConfig";

const Cart = () =>{
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDb = test.cartList.map(item =>({
            id: item.idItem,
            price: item.costItem,
            title: item.nameItem,
            qty: item.qtyItem 
        }))


        let order = {
            buyer: {
              name: "Tyrion Lannister",
              email: "elgnomo@shimail.com",
              phone: "1234567890"  
            },
            date: serverTimestamp(),
            total: test.total(),
            items: itemsForDb 
        };        

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc (newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
        .then(result => alert('Your ID Order is ' + result.id))
        .catch(err => console.log(err))

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.qtyItem)
            })
        });

        test.removeList();
    }

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
                    <button onClick={createOrder} className='btn btn-dark m-1 btn-xs'>Finalizar compra</button>
                </div>
                : <div className='card bg-success text-light text-center card-body col-md-6 mx-auto mt-3'><h2>Gracias por visitarnos</h2></div>
            }
          
        </div>        
    );
}

export default Cart;