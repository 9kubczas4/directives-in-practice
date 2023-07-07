import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.component').then(c => c.CalendarComponent),
    data: {
      label: 'Calendar [naive]',
      position: 3,
    }
  },
  {
    path: 'context-menu',
    loadComponent: () => import('./context-menu/products-list.component').then(c => c.ProductsListComponent),
    data: {
      label: 'Context menu [naive]',
      position: 12,
    }
  },
  {
    path: 'disable-interactive-elements',
    loadComponent: () => import('./disable-interactive-elements/disable-interactive-elements.component').then(c => c.DisableInteractiveElementsComponent),
    data: {
      label: 'Disable Interactive Elements [naive]',
      position: 10,
    }
  },
  {
    path: 'select',
    loadComponent: () => import('./select/smart.component').then(c => c.SmartComponent),
    data: {
      label: 'Select [naive]',
      position: 5,
    }
  },
  {
    path: 'select-as-component',
    loadComponent: () => import('./select-as-component/reactive-forms-select-container.component').then(c => c.ReactiveFormsSelectContainerComponent),
    data: {
      label: 'Select as component [naive]',
      position: 6,
    }
  },
  {
    path: 'user-permission',
    loadComponent: () => import('./user-permission/user-permission.component').then(c => c.UserPermissionComponent),
    data: {
      label: 'User Permission [naive]',
      position: 8
    }
  }
]
