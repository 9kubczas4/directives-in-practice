import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { UserSelectDirective } from '../../directive-solutions/select/select.directive';
import { ButtonModule } from 'primeng/button';
import { UserRole, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'dip-disable-interactive-elements',
  standalone: true,
  imports: [CommonModule, ButtonModule, DropdownModule, UserSelectDirective],
  template: `
    <p-button label="Always enabled"></p-button>
    <p-button
      label="Disabled for standard users"
      [disabled]="!(hasPermission$ | async)"></p-button>
    <p-dropdown users [disabled]="!(hasPermission$ | async)"></p-dropdown>
  `,
})
export class DisableInteractiveElementsComponent {
  private readonly userService = inject(UserService);
  hasPermission$ = this.userService.hasRole([UserRole.ADMIN, UserRole.MANAGER]);
}
