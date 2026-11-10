import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductPage';
import { ProductPage1 } from './pages/ProductPage1';
import { App } from './App';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Serves the corrensponding components
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductPage1 />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />;
}
