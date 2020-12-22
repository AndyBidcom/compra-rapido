import ItemCount from './ItemCount.jsx';
const ItemDetail = ({title,price,link,photo,stock,discount}) =>(
    <div className="row no-gutters detail-content">
        <div className="col-sm-1">&nbsp;</div>
        <div className="photo-detail col-sm-5">
            <img src={photo} alt={title} />
        </div>
        <div className="col-sm-1">&nbsp;</div>
        <div className="col-sm-4">
            <h1>{title}</h1>
            <span className="price-item align-self-center">${price}</span> <span className="badge badge-success">{discount}</span> 
            <div className="separador">&nbsp;</div>
            <div className="text-center stock">({stock} disponibles)</div>
            <ItemCount maxStock={stock}/>
        </div>
    </div>
)
export default ItemDetail;