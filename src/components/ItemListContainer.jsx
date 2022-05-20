import ItemCount from "./ItemCount";


const ItemListContainer = ({greeting}) => {
    return(
        <div>
        <h2>{greeting}</h2>
        <ItemCount stock={5} initial={0} onAdd={0}/>
        </div>
    );

}


export default ItemListContainer;