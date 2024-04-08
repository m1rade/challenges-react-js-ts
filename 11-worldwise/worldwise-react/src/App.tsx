import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CitiesProvider } from './contexts/CitiesContext';
import { ProtectedRoutes } from './pages/ProtectedRoutes';
import { SpinnerFullScreen } from './ui/common/SpinnerFullScreen';

const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })));
const Login = lazy(() => import('./pages/Login').then(({ Login }) => ({ default: Login })));
const MapLayout = lazy(() => import('./pages/MapLayout').then(({ MapLayout }) => ({ default: MapLayout })));
const Page404 = lazy(() => import('./pages/Page404').then(({ Page404 }) => ({ default: Page404 })));
const Pricing = lazy(() => import('./pages/Pricing').then(({ Pricing }) => ({ default: Pricing })));
const Product = lazy(() => import('./pages/Product').then(({ Product }) => ({ default: Product })));

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
          <Suspense fallback={<SpinnerFullScreen />}>
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
