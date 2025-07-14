import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'authOrder',
})
export class AuthOrderPipe implements PipeTransform {
  transform(error: ValidationErrors | null): string {
    if (!error) {
      return '';
    }

    if (error['required']) {
      return 'Поле обязательно к заполнению';
    }

    if (error['validPhoneNumber']) {
      return 'Проверьте введенный номер телефона';
    }

    return 'Обратитесь в техподдержку';
  }
}
