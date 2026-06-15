import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { TranslationProvider } from './context/TranslationContext';

export default function App() {
  return (
    <TranslationProvider>
      <RouterProvider router={router} />
    </TranslationProvider>
  );
}