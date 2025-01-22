
import React from 'react';
import ReactDOM from 'react-dom/client';  // This is important!
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // Create a root
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}