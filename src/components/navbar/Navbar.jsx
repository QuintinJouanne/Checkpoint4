import styles from './Navbar.module.scss';
import { NavLink, Link } from 'react-router-dom';
// import { BsArrowRight } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

import useClickOutside from '../CustomHooks/ClickOutside';

const Navbar = ({ BurgerColor }) => {
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink
          to={`${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };
  const [isNavOpen, setIsNavOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setIsNavOpen(false);
  });
  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/">CENTURION 21</Link>
        </div>

        {/* NAV BURGER */}
        <div
          className={styles.mobile_menu}
          style={{ color: BurgerColor }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>
        {/* NAV */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar_ul
          }`}
          ref={domNode}
        >
          <div
            className={styles.mobile_close}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>

          {/* LI-MENULINK */}
          <MenuLink url="/" path="Accueil" />
          <MenuLink url="buy" path="Acheter" />
          <MenuLink url="rent" path="Louer" />
          {/* <MenuLink url="search" path="Rechercher" /> */}
          <MenuLink url="aboutus" path="A propos" />
          {/* <Link to="/auth" className={styles.login}>
            <span>Se connecter</span>
          </Link> */}
        </ul>

        {/* LOGIN */}
        {/* <Link to="/auth" className={styles.login_container}>
          <span style={{ color: 'black' }}>Se connecter</span>
          <BsArrowRight style={{ color: 'black' }} />
        </Link> */}
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColor: 'rgb(26,55,58)',
};

export default Navbar;
