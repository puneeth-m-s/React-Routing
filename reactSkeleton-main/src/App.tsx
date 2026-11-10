//import { Route, Routes } from 'react-router-dom';
//import { ProductsPage } from './pages/ProductPage';

import { Routes } from './Routes';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
