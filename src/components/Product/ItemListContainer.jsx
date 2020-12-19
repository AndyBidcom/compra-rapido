import ItemListProduct from '../Product/ItemListProduct.jsx';
import '../../styles/Product.css';
const ItemListContainer = () =>(
    <div class="container">
        <div class="row product-grid">
            <ItemListProduct title="Lámpara escritorio Sustentable Quercus" price="4500" link="#" photo='https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg' />
            <ItemListProduct title="Lámpara escritorio Sustentable Quercus 2" price="4800" link="#" photo='https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg' />
            <ItemListProduct title="Lámpara escritorio Sustentable Quercus 3" price="5000" link="#" photo='https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg' />
            <ItemListProduct title="Lámpara escritorio Sustentable Quercus 4" price="3500" link="#" discount="20% OFF" photo='https://i.pinimg.com/564x/e5/11/f2/e511f2e19bcd96e872fc889c51e82d1b.jpg' />
        </div>
    </div>
)
  export default ItemListContainer;