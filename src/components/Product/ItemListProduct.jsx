import ItemCount from './ItemCount.jsx';

const ItemListProduct = ({title,price,link,photo,discount,stock}) =>(
    <div className="item-list col-sm-3">
        <a href={link}><img src={photo} alt={title} />
        <h3>{title}</h3></a>
        <div className="row no-gutters">
            <div className="col-5 price-item align-self-center">${price}</div>
            <div className="col-7 text-right align-self-center"><span className="badge badge-success">{discount}</span></div>
        </div>
        <ItemCount maxStock={stock}/>        
    </div>
)
export default ItemListProduct;