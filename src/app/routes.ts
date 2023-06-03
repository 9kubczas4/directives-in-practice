import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'standard',
    children: [
      {
        path: 'calendar',
        loadComponent: () => import('./pages/standard/calendar/calendar.component').then(c => c.CalendarComponent),
        data: {
          label: 'Calendar [standard]'
        }
      },
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
  }
];
