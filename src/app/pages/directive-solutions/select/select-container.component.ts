import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { UserSelectDirective } from './select.directive';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'dip-select-container',
  standalone: true,
  imports: [
    AsyncPipe,
    DropdownModule,
    JsonPipe,
    ReactiveFormsModule,
    UserSelectDirective,
  ],
  templateUrl: './select-container.component.html',
  styleUrls: ['./select-container.component.scss'],
})
export class SelectContainerComponent {
  formGroup = new FormGroup({
    user: new FormControl(null, Validators.required),
  });

  userFormControlValue$ = this.formGroup.controls.user.valueChanges;
}
