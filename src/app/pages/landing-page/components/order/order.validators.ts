import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validPhoneNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string | null = control.value;
    const phoneNumberPattern: RegExp = new RegExp(
      /^(?:\+375|80)\s*\(?(?:33|29|25|17|44)\)?\s*\d{7}$/
    );

    if (!value) return null;

    if (!phoneNumberPattern.test(value)) {
      return { validPhoneNumber: true };
    }

    return null;
  };
}