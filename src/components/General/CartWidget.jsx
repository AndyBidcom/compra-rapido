import {useState} from 'react';
import cart from '../../images/cart.svg';
import CartWidgetModal from '../General/CartWidgetModal.jsx';

const CartWidget = ({quantity}) => {
    const [showCartWidgetModal,setShowCartWidgetModal] = useState(false);
    const openCartWidgetModal = () => {
        setShowCartWidgetModal(!showCartWidgetModal);
    }
    return (
        <>
            <a href="#" className="cart-icon" onClick={openCartWidgetModal}>
                <img src={cart} alt="Cart" />
                <span class="badge badge-secondary quantity">{quantity}</span>
            </a>
            <CartWidgetModal show={showCartWidgetModal} />
        </>
    )
}
  export default CartWidget;