import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const root = document.getElementById('root');
const reactRoot = createRoot(root as HTMLElement);
reactRoot.render(
  <>
    <App />
  </>
);