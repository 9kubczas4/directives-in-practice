import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'directive/password-strength',
    pathMatch: 'full'
  },
  {
    path: 'directive-composition-api',
    children: [
      {
        path: 'context-menu',
        loadComponent: () => import('./pages/directive-compositon-api/context-menu/products-list.component').then(c => c.ProductsListComponent),
        data: {
          label: 'Context menu [Directive Composition API]'
        }
      }
    ],
  },
  {
    path: 'directive',
    children: [
      {
        path: 'calendar',
        loadComponent: () => import('./pages/directive-solutions/calendar/calendar.component').then(c => c.CalendarComponent),
        data: {
          label: 'Calendar [directive]'
        }
      },
      {
        path: 'context-menu',
        loadComponent: () => import('./pages/directive-solutions/context-menu/products-list.component').then(c => c.ProductsListComponent),
        data: {
          label: 'Context menu [directive]'
        }
      },
      {
        path: 'disable-interactive-elements',
        loadComponent: () => import('./pages/directive-solutions/disable-interactive-elements/disable-interactive-elements.component').then(c => c.DisableInteractiveElementsComponent),
        data: {
          label: 'Disable Interactive Elements [directive]'
        }
      },
      {
        path: 'ng-plural',
        loadComponent: () => import('./pages/directive-solutions/ng-plural/ng-plural.component').then(c => c.NgPluralComponent),
        data: {
          label: 'Ng Plural [directive]'
        }
      },
      {
        path: 'open-external-links-in-new-tab',
        loadComponent: () => import('./pages/directive-solutions/open-external-links-in-new-tab/open-external-links-in-new-tab.component').then(c => c.OpenExternalLinksInNewTabComponent),
        data: {
          label: '2. Open External Links [directive]'
        }
      },
      {
        path: 'password-strength',
        loadComponent: () => import('./pages/directive-solutions/password-strength/password-strength.component').then(c => c.InputExamplesComponent),
        data: {
          label: '1. Password Strength [directive]'
        }
      },
      {
        path: 'select',
        loadComponent: () => import('./pages/directive-solutions/select/select-container.component').then(c => c.SelectContainerComponent),
        data: {
          label: 'Select [directive]'
        }
      },
      {
        path: 'user-permission',
        loadComponent: () => import('./pages/directive-solutions/user-permission/user-permission.component').then(c => c.UserPermissionComponent),
        data: {
          label: 'User Permission [directive]'
        }
      }
    ]
  },
  {
    path: 'naive',
    children: [
      {
        path: 'calendar',
        loadComponent: () => import('./pages/naive/calendar/calendar.component').then(c => c.CalendarComponent),
        data: {
          label: 'Calendar [naive]'
        }
      },
      {
        path: 'context-menu',
        loadComponent: () => import('./pages/naive/context-menu/products-list.component').then(c => c.ProductsListComponent),
        data: {
          label: 'Context menu [naive]'
        }
      },
      {
        path: 'disable-interactive-elements',
        loadComponent: () => import('./pages/naive/disable-interactive-elements/disable-interactive-elements.component').then(c => c.DisableInteractiveElementsComponent),
        data: {
          label: 'Disable Interactive Elements [naive]'
        }
      },
      {
        path: 'select',
        loadComponent: () => import('./pages/naive/select/smart.component').then(c => c.SmartComponent),
        data: {
          label: 'Select [naive]'
        }
      },
      {
        path: 'select-as-component',
        loadComponent: () => import('./pages/naive/select-as-component/reactive-forms-select-container.component').then(c => c.ReactiveFormsSelectContainerComponent),
        data: {
          label: 'Select as component [naive]'
        }
      },
      {
        path: 'user-permission',
        loadComponent: () => import('./pages/naive/user-permission/user-permission.component').then(c => c.UserPermissionComponent),
        data: {
          label: 'User Permission [naive]'
        }
      }
    ]
  }
];
