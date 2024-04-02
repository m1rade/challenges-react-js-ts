import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { MapLayout } from './pages/MapLayout';
import { Page404 } from './pages/Page404';
import { Pricing } from './pages/Pricing';
import { Product } from './pages/Product';
import { ICity } from './types/data';
import { Cities } from './ui/MapComponents/Sidebar/CitiesComponents';
import { Countries } from './ui/MapComponents/Sidebar/CountriesComponents';
import { LocationInfo } from './ui/MapComponents/Sidebar/LocationInfo';
import { SidebarForm } from './ui/MapComponents/Sidebar/SidebarForm';
import { sleep } from './utils/sleep';

const BASE_URL = 'http://localhost:5172';
export const ROUTES = {
  page404: '*',
  pricing: 'pricing',
  product: 'product',
  login: 'login',
  map: 'map',
  cities: 'cities',
  countries: 'countries',
  form: 'form',
};

function App() {
  const [cities, setCities] = useState<ICity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);

        const resp = await fetch(`${BASE_URL}/cities`);
        const data = await resp.json();
        await sleep(1000);

        setCities(data);
      } catch (error) {
        console.error('Some error');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={ROUTES.pricing} element={<Pricing />} />
          <Route path={ROUTES.product} element={<Product />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.map} element={<MapLayout />}>
            <Route index element={<Navigate to={ROUTES.cities} replace />} />
            <Route path={ROUTES.cities} element={<Cities cities={cities} isLoading={isLoading} />} />
            <Route path={`${ROUTES.cities}/:id`} element={<LocationInfo />} />
            <Route path={ROUTES.countries} element={<Countries cities={cities} isLoading={isLoading} />} />
            <Route path={ROUTES.form} element={<SidebarForm />} />
          </Route>
          <Route path={ROUTES.form} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
