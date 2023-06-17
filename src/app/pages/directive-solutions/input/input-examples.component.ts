import { Component } from '@angular/core';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { JsonPipe, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { advancedPasswordValidator } from './validators/advanced-password-validator';
import { PASSWORD_VALIDATION_FN } from './providers/password-providers';

@Component({
  selector: 'dip-input-examples',
  standalone: true,
  imports: [NgIf, PasswordStrengthDirective, ReactiveFormsModule, JsonPipe],
  providers: [
    {
      provide: PASSWORD_VALIDATION_FN,
      useValue: advancedPasswordValidator,
    }
  ],
  templateUrl: './input-examples.component.html',
  styleUrls: ['./input-examples.component.scss']
})
export class InputExamplesComponent {
  passwordFormGroup = new FormGroup({
    password: new FormControl('')
  });
}
