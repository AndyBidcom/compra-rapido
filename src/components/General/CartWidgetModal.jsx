const CartWidgetModal = ({show}) => {
    return(
        <div className={`cart-widget ${show ? 'active' : ''}`}>
            <a href="#" class="close">x</a>
            <h4>Tu carrito</h4>
            <div class="row item-cart-widget">
                <div class="col-9 text-left">Título producto</div>
                <div class="col-3 text-right">$1200</div>
            </div>
        </div>
    )
}        
export default CartWidgetModal;