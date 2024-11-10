import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../Pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../../Pages/DetailsPage/DetailsPage'));
import './App.css';
import Loader from '../Loader/Loader';

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id" element={<DetailsPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
