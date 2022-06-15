import React from 'react';
import { useEffect, useState } from "react";
import ItemList from "./itemList/ItemList";
//import customFetch from "./customFetch/customFetch";
// import products from './productos/products';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';



const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState ([]);
    // const [inicio, setInicio] = useState (false);
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


    // useEffect(() => {
    //     setInicio(true)        
    //     customFetch(2000, id == undefined ? products : products.filter(item => item.category.id == parseInt (id)))
    //     .then(result => setDatos(result))
    //     .catch(err => console.log(err))
    //     .finally(()=> setInicio(false))
    // }, [id]);


    // return(
    //     <div>
    //     <h2>{greeting}</h2>
    //     { inicio ? <h3>aguantaaa...!</h3> : <ItemList items={datos}/> }      
    //     </div>
    // );

}


export default ItemListContainer;