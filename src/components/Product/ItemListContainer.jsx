import {useState,useEffect} from 'react';
import ItemListProduct from '../Product/ItemListProduct.jsx';
import '../../styles/Product.css';


const ItemListContainer = () =>{
    const [items, setItems] = useState([]);

    const products = [
        {
            id:1,
            title:'Lámpara escritorio Sustentable Quercus',
            price:4499,
            link:'#',
            photo:'https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg',
            stock:3,
        },
        {
            id:2,
            title:'Lámpara escritorio Sustentable Quercus 2',
            price:4799,
            link:'#',
            photo:'https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg',
            stock:17,
        },
        {
            id:3,
            title:'Lámpara escritorio Sustentable Quercus 3',
            price:4999,
            link:'#',
            photo:'https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg',
            stock:12,
        },
        {
            id:4,
            title:'Lámpara escritorio Sustentable Quercus 4',
            price:3499,
            link:'#',
            photo:'https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg',
            stock:31,
        },        
    ]

    const getProducts = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
    }, []);

    return(
        <div className="container">
            <div className="row product-grid">
                {
                    items.length ?                    
                    items.map(item => (
                        <ItemListProduct 
                            key={item.id} 
                            title={item.title} 
                            price={item.price} 
                            link={item.link} 
                            photo={item.photo}
                            stock={item.stock} 
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