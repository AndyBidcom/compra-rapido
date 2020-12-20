import {useState} from 'react';
import cart from '../../images/cart.svg';

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
            <div className={`cart-widget ${showCartWidgetModal ? 'active' : ''}`}>
                <a href="#" class="close" onClick={openCartWidgetModal}>x</a>
                <h4>Tu carrito</h4>
                <div class="row item-cart-widget">
                    <div class="col-9 text-left">Título producto</div>
                    <div class="col-3 text-right">$1200</div>
                </div>
            </div>            
        </>
    )
}
  export default CartWidget;