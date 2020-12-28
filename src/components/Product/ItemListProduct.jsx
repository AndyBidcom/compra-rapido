import ItemCount from './ItemCount.jsx';
import {Link} from 'react-router-dom';

const ItemListProduct = ({id,title,price,photo,discount,stock}) =>(
    <div className="item-list col-sm-3">
        <Link to={`/detail/${id}`}><div className="img-list-container"><img src={photo} alt={title} /></div>
        <h3>{title.substr(0,40)}</h3></Link>
        <div className="row no-gutters">
            <div className="col-5 price-item align-self-center">${price}</div>
            <div className="col-7 text-right align-self-center"><span className="badge badge-success">{discount}</span></div>
        </div>
        <ItemCount maxStock={stock}/>    
        <Link to={`/detail/${id}`} className="btn btn-secondary btn-sm d-block">Ver más</Link>    
    </div>
)
export default ItemListProduct;