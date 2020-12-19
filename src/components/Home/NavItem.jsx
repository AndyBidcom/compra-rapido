const NavItem = ({link='#',name,clase='nav-link'}) =>(
  <li class="col"><a Class={clase} href={link}>{name}</a></li>
)
export default NavItem;
