import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import ReduxPersistor from '@/app/redux-persistor';
import ReduxProvider from '@/app/redux-provider';
import { ThemeProvider } from '@/components/theme-provider';
import Location from '@/pages/location';
import NotFound from '@/pages/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/:locationCoords',
        element: <Location />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ReduxProvider>
      <ReduxPersistor>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </QueryClientProvider>
      </ReduxPersistor>
    </ReduxProvider>
  </StrictMode>,
);
