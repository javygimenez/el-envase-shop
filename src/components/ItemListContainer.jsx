import React from 'react';
import { useEffect, useState } from "react";
import ItemList from "./itemList/ItemList";
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';



const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState ([]);    
    const { idCategory } = useParams ();     

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);


    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);


    return(
        <div>
        <h2>{greeting}</h2>
        {<ItemList items={datos}/>}      
        </div>
    );
}


export default ItemListContainer;