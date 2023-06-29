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
          label: 'Context menu [Directive Composition API]',
          position: 100,
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
          label: 'Calendar [directive]',
          position: 4
        }
      },
      {
        path: 'context-menu',
        loadComponent: () => import('./pages/directive-solutions/context-menu/products-list.component').then(c => c.ProductsListComponent),
        data: {
          label: 'Context menu [directive]',
          position: 13
        }
      },
      {
        path: 'disable-interactive-elements',
        loadComponent: () => import('./pages/directive-solutions/disable-interactive-elements/disable-interactive-elements.component').then(c => c.DisableInteractiveElementsComponent),
        data: {
          label: 'Disable Interactive Elements [directive]',
          position: 11
        }
      },
      {
        path: 'ng-plural',
        loadComponent: () => import('./pages/directive-solutions/ng-plural/ng-plural.component').then(c => c.NgPluralComponent),
        data: {
          label: 'Ng Plural [directive]',
          position: 113
        }
      },
      {
        path: 'open-external-links-in-new-tab',
        loadComponent: () => import('./pages/directive-solutions/open-external-links-in-new-tab/open-external-links-in-new-tab.component').then(c => c.OpenExternalLinksInNewTabComponent),
        data: {
          label: 'Open External Links [directive]',
          position: 1
        }
      },
      {
        path: 'password-strength',
        loadComponent: () => import('./pages/directive-solutions/password-strength/password-strength.component').then(c => c.InputExamplesComponent),
        data: {
          label: 'Password Strength [directive]',
          position: 2
        }
      },
      {
        path: 'select',
        loadComponent: () => import('./pages/directive-solutions/select/select-container.component').then(c => c.SelectContainerComponent),
        data: {
          label: 'Select [directive]',
          position: 7
        }
      },
      {
        path: 'user-permission',
        loadComponent: () => import('./pages/directive-solutions/user-permission/user-permission.component').then(c => c.UserPermissionComponent),
        data: {
          label: 'User Permission [directive]',
          position: 9
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
          label: 'Calendar [naive]',
          position: 3,
        }
      },
      {
        path: 'context-menu',
        loadComponent: () => import('./pages/naive/context-menu/products-list.component').then(c => c.ProductsListComponent),
        data: {
          label: 'Context menu [naive]',
          position: 12,
        }
      },
      {
        path: 'disable-interactive-elements',
        loadComponent: () => import('./pages/naive/disable-interactive-elements/disable-interactive-elements.component').then(c => c.DisableInteractiveElementsComponent),
        data: {
          label: 'Disable Interactive Elements [naive]',
          position: 10,
        }
      },
      {
        path: 'select',
        loadComponent: () => import('./pages/naive/select/smart.component').then(c => c.SmartComponent),
        data: {
          label: 'Select [naive]',
          position: 5,
        }
      },
      {
        path: 'select-as-component',
        loadComponent: () => import('./pages/naive/select-as-component/reactive-forms-select-container.component').then(c => c.ReactiveFormsSelectContainerComponent),
        data: {
          label: 'Select as component [naive]',
          position: 6,
        }
      },
      {
        path: 'user-permission',
        loadComponent: () => import('./pages/naive/user-permission/user-permission.component').then(c => c.UserPermissionComponent),
        data: {
          label: 'User Permission [naive]',
          position: 8
        }
      }
    ]
  }
];
