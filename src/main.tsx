import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

try {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  const root = document.getElementById('root');

  if (root) {
    root.innerHTML = `
      <main style="font-family: Arial, sans-serif; padding: 24px; color: #111827;">
        <h1 style="margin: 0 0 12px;">Erro ao carregar o React</h1>
        <pre style="white-space: pre-wrap; background: #fee2e2; padding: 16px; border-radius: 8px;">${String(error)}</pre>
      </main>
    `;
  }
}
