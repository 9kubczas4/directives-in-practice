import { Routes } from '@angular/router';
import { NavigationOrder } from 'src/app/enums/navigation-order';

export const routes: Routes = [
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.component').then(c => c.CalendarComponent),
    data: {
      label: 'Calendar [naive]',
      position: NavigationOrder.NAIVE_CALENDAR,
    }
  },
  {
    path: 'context-menu',
    loadComponent: () => import('./context-menu/products-list.component').then(c => c.ProductsListComponent),
    data: {
      label: 'Context menu [naive]',
      position: NavigationOrder.NAIVE_CONTEXT_MENU,
    }
  },
  {
    path: 'disable-interactive-elements',
    loadComponent: () => import('./disable-interactive-elements/disable-interactive-elements.component').then(c => c.DisableInteractiveElementsComponent),
    data: {
      label: 'Disable Interactive Elements [naive]',
      position: NavigationOrder.NAIVE_DISABLE_INTERACTIVE_ELEMENTS,
    }
  },
  {
    path: 'select',
    loadComponent: () => import('./select/smart.component').then(c => c.SmartComponent),
    data: {
      label: 'Select [naive]',
      position: NavigationOrder.NAIVE_SELECT,
    }
  },
  {
    path: 'select-as-component',
    loadComponent: () => import('./select-as-component/reactive-forms-select-container.component').then(c => c.ReactiveFormsSelectContainerComponent),
    data: {
      label: 'Select as component [naive]',
      position: NavigationOrder.NAIVE_SELECT_AS_COMPONENT,
    }
  },
  {
    path: 'user-permission',
    loadComponent: () => import('./user-permission/user-permission.component').then(c => c.UserPermissionComponent),
    data: {
      label: 'User Permission [naive]',
      position: NavigationOrder.NAIVE_USER_PERMISSION
    }
  }
]
