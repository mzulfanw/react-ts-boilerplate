import { lazy } from 'react';
import type { RouteConfig } from '@/routers/routers.dto.ts';

const View = lazy(() => import('@/features/example/pages/ExamplePageView.tsx'));

export const allRoute: RouteConfig[] = [
  {
    index: true,
    path: '/',
    element: View,
  },
  {
    path: 'settings',
    element: lazy(() => import('@/page.tsx')),
    children: [
      {
        path: 'general',
        element: lazy(() => import('@/page.tsx')),
      },
      {
        path: 'advanced',
        element: lazy(() => import('@/page.tsx')),
      },
    ],
  },
];
