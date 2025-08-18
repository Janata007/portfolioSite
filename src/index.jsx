import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; 
import Main from './components/PropahMain/main';
import Header from './components/PropahHeader/header';
import Footer from './components/PropahFooter/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Main />
    <Footer/>
  </React.StrictMode>
);