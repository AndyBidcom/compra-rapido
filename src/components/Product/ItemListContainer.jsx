import {useState,useEffect} from 'react';
import ItemListProduct from '../Product/ItemListProduct.jsx';
import '../../styles/Product.css';
import {useParams} from 'react-router-dom';
import ListaProductos from '../../assets/ListaProductos.jsx';

const ItemListContainer = () =>{
    const {category_name} = useParams();
    const [items, setItems] = useState([]);
    const getProducts = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(ListaProductos);
        }, 200)
    })
    const filterProducts = () =>{
        getProducts.then((rta) => {
            if(category_name){
                const productsByCatergory = rta.filter(
                    (items) => items.category_name === category_name
                );
                setItems(productsByCatergory);                
            }else{
                setItems(rta);
            }
        });
    };

    useEffect(() => filterProducts(), [category_name]);

    return(
        <div className="container">
            <h1 className="title-category">{category_name}</h1>
            <div className="row product-grid">
                {
                    items.length ?                    
                    items.map(item => (
                        <ItemListProduct 
                            key={item.id}
                            id={item.id} 
                            title={item.title} 
                            price={item.price}
                            photo={item.photo}
                            stock={item.stock} 
                            discount={item.discount}
                        />
                    )) : 
                    <div className="container">
                        <div className="row">                                                  
                            <div className="col-12 text-center">Cargando productos...</div>                            
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default ItemListContainer;