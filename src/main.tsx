import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App';
import i18n from '../i18n';

document.documentElement.lang = i18n.language;

createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
