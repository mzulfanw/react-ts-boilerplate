import { BrowserRouter, Routes, Route } from 'react-router';
import { allRoute } from '@/routers/allRoute.ts';
import { Suspense } from 'react';
import type { RouteConfig } from '@/routers/routers.dto.ts';
import { FullPageSpinner } from '@/components/ui/fullpage-spinner.tsx';

function renderRoutes(routes: RouteConfig[]) {
  return routes.map(route => {
    const Element = route.element;

    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<Element />}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    if (route.index) {
      return <Route key="index" index element={<Element />} />;
    }

    return <Route key={route.path} path={route.path} element={<Element />} />;
  });
}

export default function Routers() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageSpinner />}>
        <Routes>{renderRoutes(allRoute)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}
