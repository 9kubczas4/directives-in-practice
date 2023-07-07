import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'context-menu',
    loadComponent: () => import('./context-menu/products-list.component').then(c => c.ProductsListComponent),
    data: {
      label: 'Context menu [Directive Composition API]',
      position: 100,
    }
  }
];
