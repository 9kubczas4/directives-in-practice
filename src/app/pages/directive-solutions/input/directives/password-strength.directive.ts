import { Directive, HostListener, Input } from '@angular/core';

export type PasswordStrength = 'weak' | 'medium' | 'strong';

@Directive({
  selector: 'input[type="password"]',
  standalone: true,
  exportAs: 'passwordStrength',
})
export class PasswordStrengthDirective {
  @Input() noStrengthCheck = false;
  // property to capture in the template
  strength: PasswordStrength = 'weak';
  // no need for ElementRef anymore

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (this.noStrengthCheck) {
      return;
    }
    this.strength = this.evaluatePasswordStrength(event.data ?? '');
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
