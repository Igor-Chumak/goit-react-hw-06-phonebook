import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from 'components';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import DarkThemeProvider from 'components/DarkThemeProvider/DarkThemeProvider';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkThemeProvider>
          <App />
        </DarkThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
