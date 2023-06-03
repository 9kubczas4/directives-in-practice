import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dip-select',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  template: `
    <p-dropdown [options]="(users$ | async)!" [(ngModel)]="selectedUser" optionLabel="fullName" placeholder="Select user"></p-dropdown>
  `,
})
export class UserSelectComponent {
  private readonly userService$ = inject(UserService);

  users$ = this.userService$.getUsers();
  selectedUser = null;
}
