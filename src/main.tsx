import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
// TypeScript may complain about side-effect CSS imports when no declaration exists.
// @ts-ignore: Allow importing CSS file as a side-effect
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
