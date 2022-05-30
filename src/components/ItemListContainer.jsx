import React from 'react';
import { useEffect, useState } from "react";
import ItemList from "./itemList/ItemList";
import ItemCount from "./itemCount/ItemCount";
import customFetch from "./customFetch/customFetch";
import products from './productos/products';
import { useParams } from 'react-router-dom';




const ItemListContainer = ({greeting}) => {
    const [articulos, setArticulos] = useState ([]);
    const [inicio, setInicio] = useState (false);
    const { id } = useParams ();
     

    useEffect(() => {
        setInicio(true)        
        customFetch(2000, id == undefined ? products : products.filter(item => item.category.id == parseInt (id)))
        .then(result => setArticulos(result))
        .catch(err => console.log(err))
        .finally(()=> setInicio(false))
    }, [id]);


    return(
        <div>
        <h2>{greeting}</h2>
        { inicio ? <h3>aguantaaa...!</h3> : <ItemList articulos={articulos}/> }      
        </div>
    );

}


export default ItemListContainer;