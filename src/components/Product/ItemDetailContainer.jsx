import {useState,useEffect} from 'react';
import ItemDetail from '../Product/ItemDetail.jsx';
import '../../styles/Product.css';
import {useParams} from 'react-router-dom';
import ListaProductos from '../../assets/ListaProductos.jsx';

const ItemDetailContainer = () =>{
    const {item_id} = useParams();
    const [item, setItem] = useState([]);

    const getProduct = new Promise((resolve, reject) =>{
        setTimeout(() => {
            const productoClickeado = ListaProductos.find(item => item.id == item_id )
            resolve(productoClickeado);
        }, 200 )
    })

    useEffect(() => {
        getProduct.then(rta => setItem(rta));
    }, []);

    return(
        <div className="container">
            {
                item ? (
                        <ItemDetail 
                            id={item.id} 
                            title={item.title} 
                            price={item.price}
                            photo={item.photo}
                            stock={item.stock} 
                            discount={item.discount}
                        />                    
                ) :
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">Cargando info del producto...</div>
                    </div>
                </div>
            }
        </div>
    )
}
export default ItemDetailContainer;