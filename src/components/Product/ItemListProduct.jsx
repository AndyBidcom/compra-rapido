const ItemListProduct = ({title,price,link,photo,discount}) =>(
    <div className="item-list col-sm-3">
        <img src={photo} alt={title} />
        <h3>{title}</h3>
        <div class="row no-gutters">
            <div class="col-5 price-item align-self-center">${price}</div>
            <div class="col-7 text-right align-self-center"><span className="badge badge-success">{discount}</span></div>
        </div>
        <a href={link} className="btn btn-outline-primary btn-sm d-block">Agregar a Carrito</a>
    </div>
)
export default ItemListProduct;