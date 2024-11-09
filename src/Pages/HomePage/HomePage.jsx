import { NavLink } from 'react-router-dom';
import css from '../HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <main className={css.main}>
      <div className={css.wrap}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.paragraph}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog" className={css.link}>
          View Now
        </NavLink>
      </div>
    </main>
  );
}
