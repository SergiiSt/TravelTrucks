import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../Pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../../Pages/DetailsPage/DetailsPage'));
const CampersFeatures = lazy(() =>
  import('../../components/CamperFeatures/CamperFeatures')
);
const CampersReviews = lazy(() =>
  import('../../components/CampersReviews/CampersReviews')
);
import './App.css';
import Loader from '../Loader/Loader';

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<CampersFeatures />} />
            <Route path="reviews" element={<CampersReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
