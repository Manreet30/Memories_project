import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as LegacyThemeProvider } from '@mui/styles'; // Important!
import App from './App';
import './index.css';
import store from './store';

const theme = createTheme(); // or your custom theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <LegacyThemeProvider theme={theme}>
        <App />
      </LegacyThemeProvider>
    </MuiThemeProvider>
  </Provider>
);

