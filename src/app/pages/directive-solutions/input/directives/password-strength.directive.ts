import { Directive, HostListener, Input } from '@angular/core';

export type PasswordStrength = 'weak' | 'medium' | 'strong';

@Directive({
  selector: 'input[type="password"]',
  standalone: true,
  exportAs: 'passwordStrength',
})
export class PasswordStrengthDirective {
  @Input() noStrengthCheck = false;

  strength: PasswordStrength = 'weak';

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (this.noStrengthCheck) {
      return;
    }
    this.strength = this.evaluatePasswordStrength((event.target as HTMLInputElement).value ?? '');
  }

  private evaluatePasswordStrength(password: string): PasswordStrength {
    if (password.length < 6) {
      return 'weak';
    } else if (password.length < 10) {
      return 'medium';
    }
    return 'strong';
  }
}
