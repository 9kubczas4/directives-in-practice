import { InjectionToken } from "@angular/core";
import { ValidatorFn } from "@angular/forms";

export const PASSWORD_VALIDATION_FN
  = new InjectionToken<ValidatorFn>('PASSWORD_VALIDATION_FN');

export function providePasswordValidatorFn(
  validatorFn: ValidatorFn,
) {
  return [{
    provide: PASSWORD_VALIDATION_FN,
    useValue: validatorFn,
  }];
}
