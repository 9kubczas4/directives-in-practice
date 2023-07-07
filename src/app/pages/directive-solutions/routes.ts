import { Routes } from "@angular/router";
import { NavigationOrder } from "src/app/enums/navigation-order";

export const routes: Routes = [
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.component').then(c => c.CalendarComponent),
    data: {
      label: 'Calendar [directive]',
      position: NavigationOrder.DIRECTIVE_CALENDAR
    }
  },
  {
    path: 'context-menu',
    loadComponent: () => import('./context-menu/products-list.component').then(c => c.ProductsListComponent),
    data: {
      label: 'Context menu [directive]',
      position: NavigationOrder.DIRECTIVE_CONTEXT_MENU
    }
  },
  {
    path: 'disable-interactive-elements',
    loadComponent: () => import('./disable-interactive-elements/disable-interactive-elements.component').then(c => c.DisableInteractiveElementsComponent),
    data: {
      label: 'Disable Interactive Elements [directive]',
      position: NavigationOrder.DIRECTIVE_DISABLE_INTERACTIVE_ELEMENTS
    }
  },
  {
    path: 'ng-plural',
    loadComponent: () => import('./ng-plural/ng-plural.component').then(c => c.NgPluralComponent),
    data: {
      label: 'Ng Plural [directive]',
      position: NavigationOrder.DIRECTIVE_NG_PLURAL
    }
  },
  {
    path: 'open-external-links-in-new-tab',
    loadComponent: () => import('./open-external-links-in-new-tab/open-external-links-in-new-tab.component').then(c => c.OpenExternalLinksInNewTabComponent),
    data: {
      label: 'Open External Links [directive]',
      position: NavigationOrder.DIRECTIVE_OPEN_EXTERNAL_LINKS
    }
  },
  {
    path: 'password-strength',
    loadComponent: () => import('./password-strength/password-strength.component').then(c => c.InputExamplesComponent),
    data: {
      label: 'Password Strength [directive]',
      position: NavigationOrder.DIRECTIVE_PASSWORD_STRENGTH
    }
  },
  {
    path: 'select',
    loadComponent: () => import('./select/select-container.component').then(c => c.SelectContainerComponent),
    data: {
      label: 'Select [directive]',
      position: NavigationOrder.DIRECTIVE_SELECT
    }
  },
  {
    path: 'user-permission',
    loadComponent: () => import('./user-permission/user-permission.component').then(c => c.UserPermissionComponent),
    data: {
      label: 'User Permission [directive]',
      position: NavigationOrder.DIRECTIVE_USER_PERMISSION
    }
  }
];
