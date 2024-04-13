import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserReactiveFormsSelectComponent } from './reactive-forms-select.component';

@Component({
  selector: 'dip-reactive-forms-select-container',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserReactiveFormsSelectComponent,
  ],
  templateUrl: './reactive-forms-select-container.component.html',
  styleUrls: ['./reactive-forms-select-container.component.scss'],
})
export class ReactiveFormsSelectContainerComponent {
  formGroup = new FormGroup({
    user: new FormControl(null, Validators.required),
  });

  userFormControl = this.formGroup.get('user') as FormControl;

  userFormControlValue$ = this.userFormControl.valueChanges;
}
