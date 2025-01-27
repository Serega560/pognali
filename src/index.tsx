import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import browserHistory from './browser-history';
import HistoryRouter from './history-route/history-route';
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <HistoryRouter history={browserHistory}> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </HistoryRouter> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
