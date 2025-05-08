import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import MemberCreate from './components/MemberCreate.jsx';
import { AuthContextProvider } from './context/UserContext.jsx';
import LoginPage from './components/LoginPage.jsx';
import ProductList from './components/ProductList.jsx';
import './App.css';
import { CartContextProvider } from './context/CartContext.jsx';
import OrderPage from './components/OrderPage.jsx';
import MyPage from './components/MyPage.jsx';
import ProductCreate from './components/ProductCreate.jsx';
import AppRouter from './router/AppRouter.jsx';

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <div className='App'>
          <Header />
          <div className='content-wrapper'>
            <AppRouter />
          </div>
          <Footer />
        </div>
      </CartContextProvider>
    </AuthContextProvider>
  );
};
export default App;
