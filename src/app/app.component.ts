import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { tap } from 'rxjs';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User, UserService } from './services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserSelectDirective } from './pages/directive-solutions/select/select.directive';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'dip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    UserSelectDirective,
  ],
})
export class AppComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly navigationService = inject(NavigationService);
  private readonly userService = inject(UserService);

  userFormControl = new FormControl<User | null>(null);

  pages$ = this.navigationService.pages$;

  ngOnInit(): void {
    this.userService.currentUser$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(currentUser => {
        this.userFormControl.patchValue(currentUser);
      });

    this.userFormControl.valueChanges
      .pipe(
        tap(user => this.userService.setCurrentUser(user!)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
