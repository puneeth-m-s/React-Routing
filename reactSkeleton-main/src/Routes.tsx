import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductPage';
import { ProductPage1 } from './pages/ProductPage1';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { lazy, Suspense } from 'react';

const AdminPage = lazy(() => import('./pages/Admin/admin'));

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
      {
        path: 'admin',
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />;
}
