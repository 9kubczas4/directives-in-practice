import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { of, take, tap } from 'rxjs';
import { routes } from './routes';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User, UserService } from './services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserSelectDirective } from './pages/directive-solutions/select/select.directive';

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
    routes
    .flatMap(x => x.children?.map(child => ({...child, url: `${x?.path}/${child?.path}`})))
    .filter(x => !!x?.data)
    .map((route) => ({
      label: route?.data ? route.data['label'] : null,
      url: route?.url,
      icon: null
    }))
    .sort(
      (a, b) => {
        const nameA = a.label?.toUpperCase(); // ignore upper and lowercase
        const nameB = b.label?.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }
    )
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
}
