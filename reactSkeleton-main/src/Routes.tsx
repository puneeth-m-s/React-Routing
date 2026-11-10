import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductPage';
import { Header } from './Header';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <Header />, // Serves the corrensponding components
  },
  {
    path: 'products',
    element: <ProductsPage />, // Serves the corrensponding components
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />;
}
