import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { UserSelectDirective } from './select.directive';

@Component({
  selector: 'dip-select-container',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule, UserSelectDirective],
  templateUrl: './select-container.component.html',
  styleUrls: ['./select-container.component.scss']
})
export class SelectContainerComponent {
  formGroup = new FormGroup({
    user: new FormControl(null, Validators.required)
  });

  userFormControlValue$ = this.formGroup.controls.user.valueChanges;
}
