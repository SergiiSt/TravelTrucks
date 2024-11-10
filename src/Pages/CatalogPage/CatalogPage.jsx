import CamperList from '../../components/CamperList/CamperList';
import css from '../CatalogPage/CatalogPage.module.css';
import Aside from '../../components/Aside/Aside';
// import Container from '../../components/Container/Container';

export default function CatalogPage() {
  return (
    <main className={css.main}>
      <Aside />
      <CamperList />
    </main>
  );
}
