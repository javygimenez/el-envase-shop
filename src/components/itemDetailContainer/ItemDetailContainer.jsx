import React from 'react';
import { useEffect, useState } from "react";
import customFetch from '../customFetch/customFetch';
import products from '../productos/products';
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({greeting}) => {
    const [articulos, setArticulos] = useState ([]);
    const [inicio, setInicio] = useState (false);
    const { id } = useParams ();
     

    useEffect(() => {
        setInicio(true)        
        customFetch(2000, products.find(item => item.id === parseInt(id)))
        .then(result => setArticulos(result))
        .catch(err => console.log(err))
        .finally(()=> setInicio(false))
    }, []);


    return(
        <div>
        <h2>{greeting}</h2>
        { inicio ? <h3>aguantaaa...!</h3> : <ItemDetail articulos={articulos}/> }      
        </div>
    );

}


export default ItemDetailContainer;