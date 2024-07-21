import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import Plan from './components/blocks/plan/plan'
import Footer from './components/blocks/footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
      <Plan/>
      <Footer />
  </React.StrictMode>
);

reportWebVitals();
