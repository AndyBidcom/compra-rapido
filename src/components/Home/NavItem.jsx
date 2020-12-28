import {Link} from 'react-router-dom';

const NavItem = ({link='#',name,clase='nav-link'}) =>(
  <li className="col"><Link className={clase} to={link}>{name}</Link></li>
)
export default NavItem;
