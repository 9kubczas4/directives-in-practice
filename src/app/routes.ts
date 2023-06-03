import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'standard',
    children: [
      {
        path: 'reactive-select',
        loadComponent: () => import('./pages/standard/select/reactive-forms-select-container.component').then(c => c.ReactiveFormsSelectContainerComponent),
        data: {
          label: 'Select Reactive [standard]'
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
        path: 'select',
        loadComponent: () => import('./pages/directive-solutions/select/select-container.component').then(c => c.SelectContainerComponent),
        data: {
          label: 'Select [directive]'
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
        path: 'select',
        loadComponent: () => import('./pages/naive/select/smart.component').then(c => c.SmartComponent),
        data: {
          label: 'Select [naive]'
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
