/* eslint-disable react-refresh/only-export-components */
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import LoadingSpinner from './loading-spinner';

import ReduxPersistor from '@/app/redux-persistor';
import ReduxProvider from '@/app/redux-provider';
import { ThemeProvider } from '@/components/theme-provider';

const NotFound = lazy(() => import('@/pages/not-found'));
const Location = lazy(() => import('@/pages/location'));

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
            <Suspense fallback={<LoadingSpinner />}>
              <RouterProvider router={router} />
              <ReactQueryDevtools initialIsOpen={false} />
            </Suspense>
          </ThemeProvider>
        </QueryClientProvider>
      </ReduxPersistor>
    </ReduxProvider>
  </StrictMode>,
);
