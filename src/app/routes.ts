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
      }
    ]
  }
];
