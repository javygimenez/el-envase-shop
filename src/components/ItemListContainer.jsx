import React from 'react';
import { useEffect, useState } from "react";
import ItemList from "./itemList/ItemList";
import ItemCount from "./itemCount/ItemCount";
import customFetch from "./customFetch/customFetch";
import products from './productos/products';





const ItemListContainer = ({greeting}) => {
    const [articulos, setArticulos] = useState ([]);
    const [inicio, setInicio] = useState (false); 
     

    useEffect(() => {
        setInicio(true)        
        customFetch(2000, products)
        .then(result => setArticulos(result))
        .catch(err => console.log(err))
        .finally(()=> setInicio(false))
    }, []);


    return(
        <div>
        <h2>{greeting}</h2>
        { inicio ? <h3>aguantaaa...!</h3> : <ItemList articulos={articulos}/> }        
        <ItemCount stock={5} initial={0} onAdd={0}/>
        </div>
    );

}


export default ItemListContainer;