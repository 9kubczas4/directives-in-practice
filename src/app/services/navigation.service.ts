import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { getRoutesWithFullPath } from '../helpers/routing.helper';
import {
  DIRECTIVE_COMPOSITION_API_ROUTE_PREFIX,
  DIRECTIVE_ROUTE_PREFIX,
  NAIVE_ROUTE_PREFIX,
} from '../routes';
import { routes as directiveCompositionApiRoutes } from '../pages/directive-compositon-api/routes';
import { routes as directiveRoutes } from '../pages/directive-solutions/routes';
import { routes as naiveRoutes } from '../pages/naive/routes';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  pages$ = of(
    [
      ...getRoutesWithFullPath(
        directiveCompositionApiRoutes,
        DIRECTIVE_COMPOSITION_API_ROUTE_PREFIX
      ),
      ...getRoutesWithFullPath(directiveRoutes, DIRECTIVE_ROUTE_PREFIX),
      ...getRoutesWithFullPath(naiveRoutes, NAIVE_ROUTE_PREFIX),
    ]
      .filter(x => !!x?.data)
      .map(route => ({
        label: route?.data ? route.data['label'] : null,
        url: route?.fullPath,
        position: route?.data ? route.data['position'] : null,
      }))
      .sort((a, b) => a.position - b.position)
  );
}
