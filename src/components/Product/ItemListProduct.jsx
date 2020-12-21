import ItemCount from './ItemCount.jsx';

const ItemListProduct = ({title,price,link,photo,discount}) =>(
    <div className="item-list col-sm-3">
        <a href={link}><img src={photo} alt={title} />
        <h3>{title}</h3></a>
        <div class="row no-gutters">
            <div class="col-5 price-item align-self-center">${price}</div>
            <div class="col-7 text-right align-self-center"><span className="badge badge-success">{discount}</span></div>
        </div>
        <ItemCount/>        
    </div>
)
export default ItemListProduct;