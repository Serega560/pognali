import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import Header from './components/blocks/header/header';
import Footer from './components/blocks/footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />      
    <App />     
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
