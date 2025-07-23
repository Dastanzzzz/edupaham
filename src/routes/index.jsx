import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import AdminLayout from 'layouts/AdminLayout';

// render - landing page
const About = lazy(() => import('../views/about'));

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <About />
        }
      ]
    },
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
