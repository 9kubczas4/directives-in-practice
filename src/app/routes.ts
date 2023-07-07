import { Routes } from "@angular/router";

export const DEFAULT_PAGE = 'directive/password-strength';
export const DIRECTIVE_COMPOSITION_API_ROUTE_PREFIX = 'directive-composition-api';
export const DIRECTIVE_ROUTE_PREFIX = 'directive';
export const NAIVE_ROUTE_PREFIX = 'naive';

export const routes: Routes = [
  {
    path: '',
    redirectTo: DEFAULT_PAGE,
    pathMatch: 'full'
  },
  {
    path: DIRECTIVE_COMPOSITION_API_ROUTE_PREFIX,
    loadChildren: () => import('./pages/directive-compositon-api/routes').then(config => config.routes)
  },
  {
    path: DIRECTIVE_ROUTE_PREFIX,
    loadChildren: () => import('./pages/directive-solutions/routes').then(config => config.routes)
  },
  {
    path: NAIVE_ROUTE_PREFIX,
    loadChildren: () => import('./pages/naive/routes').then(config => config.routes)
  }
];
