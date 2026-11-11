import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductPage';
import { ProductPage1 } from './pages/ProductPage1';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Serves the corrensponding components
    errorElement: <ErrorPage />,
    children: [
      {
        // path: '/',
        index: true,
        element: <HomePage />,
      },
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
