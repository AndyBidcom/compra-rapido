import logo from '../../logo.svg';
import NavItem from './NavItem.jsx';
import CartWidget from '../General/CartWidget.jsx';
import Modal from '../General/modal.jsx';
import '../../styles/Cart.css';
function NavBar(){
    return(  
      <header class="container">
        <div className="row no-gutters">
          <div className="col-2"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="col-10">      
            <nav className="navbar navbar-light bg-light">
              <ul class="menu row">
                <NavItem name="Cocina" clase="nav-link active" />
                <NavItem link="https://www.google.com" name="Deco"/>
                <NavItem link="https://www.google.com" name="Dormitorio"/>
                <NavItem link="https://www.google.com" name="Baño"/>
              </ul>
              <div className="navbar-text">
                <CartWidget quantity="1"/>
              </div>              
            </nav>
          </div>
        </div>
      </header>                
    )
}
export default NavBar;