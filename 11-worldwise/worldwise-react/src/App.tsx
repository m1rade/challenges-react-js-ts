import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CitiesProvider } from './contexts/CitiesContext';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { MapLayout } from './pages/MapLayout';
import { Page404 } from './pages/Page404';
import { Pricing } from './pages/Pricing';
import { Product } from './pages/Product';
import { ProtectedRoutes } from './pages/ProtectedRoutes';
import { Cities } from './ui/MapComponents/Sidebar/CitiesComponents';
import { CityInfo } from './ui/MapComponents/Sidebar/CityInfo';
import { Countries } from './ui/MapComponents/Sidebar/CountriesComponents';
import { SidebarForm } from './ui/MapComponents/Sidebar/SidebarForm';

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
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.pricing} element={<Pricing />} />
            <Route path={ROUTES.product} element={<Product />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route
              path={ROUTES.map}
              element={
                <ProtectedRoutes>
                  <MapLayout />
                </ProtectedRoutes>
              }>
              <Route index element={<Navigate to={ROUTES.cities} replace />} />
              <Route path={ROUTES.cities} element={<Cities />} />
              <Route path={`${ROUTES.cities}/:id`} element={<CityInfo />} />
              <Route path={ROUTES.countries} element={<Countries />} />
              <Route path={ROUTES.form} element={<SidebarForm />} />
            </Route>
            <Route path={ROUTES.page404} element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
