import type { JSX, LazyExoticComponent } from 'react';

export type RouteConfig = {
  path?: string;
  index?: boolean;
  element: LazyExoticComponent<() => JSX.Element>;
  children?: RouteConfig[];
};
