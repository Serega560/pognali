import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import browserHistory from './browser-history';
import HistoryRouter from './history-route/history-route';
import { Provider } from 'react-redux';
import { store } from './store';
import Plan from './components/blocks/plan/plan'
import Header from './components/blocks/header/header';
import Footer from './components/blocks/footer/footer';
import Route from './components/blocks/route/route';
import countriesMocks from './mocks/countriesMocks';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
