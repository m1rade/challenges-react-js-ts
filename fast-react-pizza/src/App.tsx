import { Outlet, useNavigation } from 'react-router-dom';
import { CartOverview } from './features/cart/CartOverview';
import { Header } from './ui/Header';
import { Spinner } from './ui/Spinner';

export function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      {isLoading && <Spinner />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
