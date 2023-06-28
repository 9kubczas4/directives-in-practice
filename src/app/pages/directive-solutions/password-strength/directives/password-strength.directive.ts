import { Directive, OnInit, inject } from '@angular/core';
import { AbstractControl, NgControl, ValidationErrors } from '@angular/forms';
import { PASSWORD_VALIDATION_FN } from '../providers/password-providers';

@Directive({
  selector: 'input[type="password"]:not([skipCheck])',
  standalone: true,
})
export class PasswordStrengthDirective implements OnInit {
  private readonly ngControl = inject(NgControl, { optional: true, self: true });
  private readonly passwordValidationFn = inject(PASSWORD_VALIDATION_FN, { optional: true });

  ngOnInit(): void {
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.setValidators(this.passwordValidationFn ?? this.defaultPasswordStrengthEvaluation)
    }
  }

  private defaultPasswordStrengthEvaluation = (passwordControl: AbstractControl): ValidationErrors | null => {
    return passwordControl.value.length < 6
      ? { weakPassword: 'Password is weak' }
      : null;
  }
}
