import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App.tsx';
import { Cart } from '../features/cart/Cart.tsx';
import { Menu } from '../features/menu/Menu.tsx';
import { CreateOrder } from '../features/order/CreateOrder.tsx';
import { Order } from '../features/order/Order.tsx';
import { ErrorPage } from '../ui/ErrorPage.tsx';
import { Home } from '../ui/Home.tsx';
import { Paths } from './paths.ts';

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: Menu.loader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: CreateOrder.action,
      },
      {
        path: Paths.orderDetails,
        element: <Order />,
        loader: Order.loader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
