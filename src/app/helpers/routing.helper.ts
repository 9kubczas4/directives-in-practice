import { Routes } from '@angular/router';
import { RouteWithFullPath } from '../types/route-with-full-path';

export const getRoutesWithFullPath = (
  routes: Routes,
  prefix: string
): RouteWithFullPath[] => {
  return routes.map(route => ({
    ...route,
    fullPath: `${prefix}/${route?.path}`,
  }));
};
