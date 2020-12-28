import logo from '../../logo.svg';
import NavItem from './NavItem.jsx';
import CartWidget from '../General/CartWidget.jsx';
import '../../styles/Cart.css';
import {Link} from 'react-router-dom';

function NavBar(){
    return(  
      <header className="container">
        <div className="row no-gutters">
          <div className="col-2"><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></div>
          <div className="col-10">      
            <nav className="navbar navbar-light bg-light">
              <ul className="menu row">
                <NavItem link="/category/cocina" name="Cocina" clase="nav-link active" />
                <NavItem link="/category/deco" name="Deco"/>
                <NavItem link="/category/dormitorio" name="Dormitorio"/>
                <NavItem link="/category/bano" name="Baño"/>
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