import { NavLink } from 'react-router-dom';
import Logo from '../../img/Logo.png';

import css from '../Navigation/Navigation.module.css';

export default function Navigation() {
  return (
    <>
      {/* <div className={css.separator}></div> */}
      <header className={css.header}>
        {/* <Container className={css.comtainer}> */}
        <section className={css.logo}>
          {/* <NavLink to="/">TravelTruck</NavLink> */}
          <NavLink to="/">
            <img src={Logo} alt="Trave Truck Logo" />
          </NavLink>
        </section>

        <nav className={css.nav}>
          <NavLink to="/" className={css.home}>
            Home
          </NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </nav>
        {/* </Container> */}
      </header>
    </>
  );
}
