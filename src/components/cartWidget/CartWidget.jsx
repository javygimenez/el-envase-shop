import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect } from 'react';

const CartWidget = () => {
    const test = useContext(CartContext); 
    return(
        <div className="m-3">
        <IconButton aria-label="cart">
            <Badge badgeContent={test.cantidadCarrito()} color="secondary">
                <ShoppingCartOutlined color= "secondary"/>
            </Badge>
        </IconButton>
        </div>  
    );
}

export default CartWidget;