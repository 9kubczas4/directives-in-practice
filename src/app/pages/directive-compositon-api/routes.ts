import { Routes } from "@angular/router";
import { NavigationOrder } from "src/app/enums/navigation-order";

export const routes: Routes = [
  {
    path: 'context-menu',
    loadComponent: () => import('./context-menu/products-list.component').then(c => c.ProductsListComponent),
    data: {
      label: 'Context menu [Directive Composition API]',
      position: NavigationOrder.DIRECTIVE_COMPOSITION_API_CONTEXT_MENU,
    }
  }
];
