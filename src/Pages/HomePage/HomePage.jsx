import Container from '../../components/Container/Container';
import css from '../HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <main className={css.main}>
      <Container>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <button>View Now</button>
      </Container>
    </main>
  );
}
