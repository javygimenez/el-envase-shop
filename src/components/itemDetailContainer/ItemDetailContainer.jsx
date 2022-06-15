import { useEffect, useState } from "react";
// import customFetch from '../customFetch/customFetch';
// import products from '../productos/products';
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from "../../utils/firestoreFetch";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
    //const [inicio, setInicio] = useState (false);
    const { idItem } = useParams ();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato} />
    );
     

    // useEffect(() => {
    //     setInicio(true)        
    //     customFetch(2000, products.find(item => item.id === parseInt(idItem)))
    //     .then(result => setDato(result))
    //     .catch(err => console.log(err))
    //     .finally(()=> setInicio(false))
    // }, [idItem]);


    // return(
    //     <div>
    //     <h2>{greeting}</h2>
    //     { inicio ? <h3>aguantaaa...!</h3> : <ItemDetail item={dato}/> }      
    //     </div>
    // );

}


export default ItemDetailContainer;