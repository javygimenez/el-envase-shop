import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const addToCart = (item, qty) => {
        const found = cartList.find(product => product.idItem === item.id);       
        found === undefined
        ? setCartList([...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img[0],
                    nameItem: item.name,
                    costItem: item.price,
                    qtyItem: qty
                }
        ])
        : found.qtyItem += qty;
    }


    const removeList = () => {
        setCartList([]);
    }


    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }


    return(
        <CartContext.Provider value={{cartList, addToCart, deleteItem, removeList}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;