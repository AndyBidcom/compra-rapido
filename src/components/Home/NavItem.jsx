const NavItem = ({link='#',name,clase='nav-link'}) =>(
  <li className="col"><a className={clase} href={link}>{name}</a></li>
)
export default NavItem;
