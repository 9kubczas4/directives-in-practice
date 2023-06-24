import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * Expects:
 * - at least one capital letter
 * - at least one special character
 * - at least one number
 */
export const advancedPasswordValidator = (passwordControl: AbstractControl): ValidationErrors | null => {
  const value = passwordControl.value as string;
  const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/;

  return pattern.test(value)
    ? null
    : { weakPassword: 'Password is weak' };
}
