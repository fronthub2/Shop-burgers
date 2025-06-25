import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  form = new FormGroup({
    order: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  confirmOrder() {
    if (this.form.valid) {
      alert('Спасибо за заказ! Мы скоро с вами свяжемся!');
      this.form.reset();
    }
  }
}
