import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Layout } from './Layout/Layout';

import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage to={'/'} />}></Route>
      </Route>
    </Routes>
  );
};
