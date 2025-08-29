import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/productsRedux';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import BlogPage from './components/views/BlogPage/BlogPage';
import ShopPage from './components/views/ShopPage/ShopPage.Container';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <MainLayout>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/shop'} component={ShopPage} />
        <Route exact path={'/shop/:categoryId'} component={ProductList} />
        <Route exact path={'/product/:productId'} component={ProductPage} />
        <Route exact path={'/blog'} component={BlogPage} />
      </Switch>
    </MainLayout>
  );
};

export default App;
