
import cart from '../../images/cart.svg';
const CartWidget = ({quantity='0'}) =>(
    <a href="#" className="cart-icon">
        <img src={cart} alt="Cart" />
        <span class="badge badge-secondary quantity">{quantity}</span>
    </a>
)
  export default CartWidget;