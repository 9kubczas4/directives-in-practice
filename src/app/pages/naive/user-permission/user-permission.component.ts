import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRole, UserService } from 'src/app/services/user.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'dip-user-permission',
  standalone: true,
  imports: [CommonModule, MatListModule],
  template: `
    @if (hasAdditionalPermission$ | async) {
      <mat-list role="list">
        <mat-list-item role="listitem">Setting 1</mat-list-item>
        <mat-list-item role="listitem">Setting 2</mat-list-item>
      </mat-list>
    }
  `,
})
export class UserPermissionComponent {
  private readonly userService = inject(UserService);
  hasAdditionalPermission$ = this.userService.hasRole([
    UserRole.ADMIN,
    UserRole.MANAGER,
  ]);
}
