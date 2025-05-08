import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home.jsx';
import MemberCreate from '../components/MemberCreate.jsx';
import LoginPage from '../components/LoginPage.jsx';
import ProductList from '../components/ProductList.jsx';
import OrderPage from '../components/OrderPage.jsx';
import MyPage from '../components/MyPage.jsx';
import ProductCreate from '../components/ProductCreate.jsx';
import PrivateRouter from './PrivateRouter.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/member/create' element={<MemberCreate />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/product/list' element={<ProductList />} />
      <Route
        path='/order/cart'
        element={<PrivateRouter element={<OrderPage />} />}
      />
      <Route path='/mypage' element={<MyPage />} />
      <Route
        path='/product/manage'
        element={
          <PrivateRouter element={<ProductCreate />} requiredRole='ADMIN' />
        }
      />
    </Routes>
  );
};

export default AppRouter;
