import { Component } from '@angular/core';

import { AuthorizedAccessOnlyDirective } from './authorized-access-only.directive';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { UserSelectDirective } from '../select/select.directive';
import { UserRole } from 'src/app/services/user.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dip-disable-interactive-elements',
  standalone: true,
  imports: [
    AuthorizedAccessOnlyDirective,
    UserSelectDirective,
    ButtonModule,
    DropdownModule,
    MatButtonModule,
  ],
  template: `
    <p-button label="Always enabled"></p-button>
    <p-button
      label="Disabled for standard users"
      dipAuthorizedAccessOnly
      [roles]="allowedRoles"></p-button>
    <p-dropdown
      users
      dipAuthorizedAccessOnly
      [roles]="allowedRoles"></p-dropdown>
    <input dipAuthorizedAccessOnly [roles]="allowedRoles" type="text" />
    <button
      dipAuthorizedAccessOnly
      [roles]="allowedRoles"
      mat-button
      color="primary">
      MatButton
    </button>
  `,
})
export class DisableInteractiveElementsComponent {
  allowedRoles = [UserRole.ADMIN, UserRole.MANAGER];
}
