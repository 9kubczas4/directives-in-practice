import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { Route, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { of, take, tap } from 'rxjs';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User, UserService } from './services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserSelectDirective } from './pages/directive-solutions/select/select.directive';
import { routes as directiveCompositionApiRoutes } from './pages/directive-compositon-api/routes';
import { routes as directiveRoutes } from './pages/directive-solutions/routes';
import { routes as naiveRoutes} from './pages/naive/routes';
import { DIRECTIVE_COMPOSITION_API_ROUTE_PREFIX, DIRECTIVE_ROUTE_PREFIX, NAIVE_ROUTE_PREFIX } from './routes';

export type RouteWithFullPath = Route & { fullPath: string };

@Component({
  selector: 'dip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule,
    DropdownModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    UserSelectDirective
  ]
})
export class AppComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly destroyRef = inject(DestroyRef);

  userFormControl = new FormControl<User | null>(null);

  pages$ = of(
    [...this.getRoutesWithFullPath(directiveCompositionApiRoutes, DIRECTIVE_COMPOSITION_API_ROUTE_PREFIX),
      ...this.getRoutesWithFullPath(directiveRoutes, DIRECTIVE_ROUTE_PREFIX),
      ...this.getRoutesWithFullPath(naiveRoutes, NAIVE_ROUTE_PREFIX)]
    .filter(x => !!x?.data)
    .map((route) => ({
      label: route?.data ? route.data['label'] : null,
      url: route?.fullPath,
      position: route?.data ? route.data['position'] : null,
    }))
    .sort((a, b) => a.position - b.position)
  );

  ngOnInit(): void {
    this.userService.currentUser$.pipe(take(1), takeUntilDestroyed(this.destroyRef))
    .subscribe((currentUser) => {
      this.userFormControl.patchValue(currentUser);
    });

    this.userFormControl.valueChanges
    .pipe(tap((user) => this.userService.setCurrentUser(user!)), takeUntilDestroyed(this.destroyRef))
    .subscribe();
  }

  private getRoutesWithFullPath(routes: Routes, prefix: string): RouteWithFullPath[] {
    return routes.map(route => ({...route, fullPath: `${prefix}/${route?.path}`}));
  }
}
