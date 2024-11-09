import { NavLink } from 'react-router-dom';
import Logo from '../../img/Logo.png';
// import Container from '../Container/Container';

import css from '../Navigation/Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <header className={css.header}>
        <section className={css.logo}>
          <NavLink to="/">
            <img src={Logo} alt="Trave Truck Logo" />
          </NavLink>
        </section>

        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : css.home)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? css.active : css.home)}
          >
            Catalog
          </NavLink>
        </nav>
      </header>
    </>
  );
}
