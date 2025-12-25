import { lazy } from 'react';
import type { ReactNode } from 'react';

const Index = lazy(() => import('./pages/Index'));

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Index />
  }
];

export default routes;
