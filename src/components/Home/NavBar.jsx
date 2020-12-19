import logo from '../../logo.svg';
import NavItem from './NavItem.jsx';
function NavBar(){
    return(  
      <header class="container">
        <div className="row">
          <div className="col-2"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="col-10">      
            <nav className="navbar navbar-dark bg-primary">
              <ul class="menu row">
                <NavItem name="Cocina" clase="nav-link active" />
                <NavItem link="https://www.google.com" name="Deco"/>
                <NavItem link="https://www.google.com" name="Dormitorio"/>
                <NavItem link="https://www.google.com" name="Baño"/>
              </ul>
            </nav>
          </div>
        </div>
      </header>          
    )
}
export default NavBar;