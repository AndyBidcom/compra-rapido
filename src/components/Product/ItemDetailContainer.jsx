import {useState,useEffect} from 'react';
import ItemDetail from '../Product/ItemDetail.jsx';
import '../../styles/Product.css';


const ItemDetailContainer = () =>{
    const [item, setItem] = useState([]);

    const product = [
        {
            id:1,
            title:'Lámpara escritorio Sustentable Quercus',
            price:4499,
            link:'#',
            photo:'https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg',
            stock:3,
            discount:'20% OFF',
        },        
    ]

    const getProduct = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(product);
        }, 2000)
    })

    useEffect(() => {
        getProduct.then(rta => setItem(rta));
    }, []);

    return(
        <div className="container">
            {
                item.length ?                    
                item.map(itemD => (
                    <ItemDetail 
                        key={itemD.id} 
                        title={itemD.title} 
                        price={itemD.price} 
                        link={itemD.link} 
                        photo={itemD.photo}
                        stock={itemD.stock} 
                        discount={itemD.discount}
                    />
                )) : 
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