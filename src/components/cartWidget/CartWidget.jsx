import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CartWidget = () => {
    return(  
        <IconButton aria-label="cart">
            <Badge badgeContent={7} color="secondary">
                <ShoppingCartOutlined color= "secondary"/>
            </Badge>
        </IconButton>
    );
}



export default CartWidget;