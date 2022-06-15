import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const addToCart = (item, qty) => {
        const found = cartList.find(product => product.idItem === item.id);       
        if (found === undefined) { 
            setCartList([...cartList,
                   {
                       idItem: item.id,
                       imgItem: item.img,
                       nameItem: item.name,
                       costItem: item.price,
                       qtyItem: qty
                   }
           ]);
           } else {found.qtyItem += qty;
           setCartList([...cartList]);
           }    
    }


    const removeList = () => {
        setCartList([]);
    }


    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    
    const cantidadCarrito = () => {
        
        let cantidadItems = cartList.map(item =>item.qtyItem).reduce((prev, curr) => prev + curr,0)        
        return (cantidadItems)
    }
    

    
    const precioPorCantidad = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }



    const subTotal = () => {
        let totalPerItem = cartList.map(item => precioPorCantidad(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }



    const calcIva = () => {
        return subTotal() * 0.21;
    }



    const total = () => {
        return subTotal() - calcIva();
    }
    


    return(
        <CartContext.Provider value={{cartList, addToCart, deleteItem, removeList, cantidadCarrito, precioPorCantidad, subTotal, calcIva, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;