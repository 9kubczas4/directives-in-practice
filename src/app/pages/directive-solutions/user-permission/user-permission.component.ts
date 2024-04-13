import { UserRole } from 'src/app/services/user.service';
import { Component } from '@angular/core';

import { HasRoleDirective } from './has-role.directive';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'dip-user-permission',
  standalone: true,
  imports: [MatListModule, HasRoleDirective],
  template: `
    <mat-list *hasRole="[UserRole.ADMIN, UserRole.MANAGER]" role="list">
      <mat-list-item role="listitem">Setting 1</mat-list-item>
      <mat-list-item role="listitem">Setting 2</mat-list-item>
    </mat-list>
  `,
})
export class UserPermissionComponent {
  UserRole = UserRole;
}
