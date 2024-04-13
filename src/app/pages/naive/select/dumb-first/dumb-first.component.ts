import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'dip-dumb-first',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './dumb-first.component.html',
  styleUrls: ['./dumb-first.component.scss'],
})
export class DumbFirstComponent {
  private readonly userService$ = inject(UserService);

  users$ = this.userService$.getUsers();

  formGroup = new FormGroup({
    user: new FormControl(null, Validators.required),
    // it could be more controls
  });
}
