import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // currency = '$';

  // form = this.fb.group({
  //   order: ["", Validators.required],
  //   name: ["", Validators.required],
  //   phone: ["", Validators.required],
  // });

  
  // constructor(private fb: FormBuilder) {

  // };

  // scrollTo(target: HTMLElement, burger?: any) {
  //   target.scrollIntoView({ behavior: 'smooth'});
  //   if (burger) {
  //     this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
  //   };
  // };

  // confirmOrder() {
  //   if (this.form.valid) {
  //     alert('Спасибо за заказ! Мы скоро с вами свяжемся!');
  //     this.form.reset();
  //   }
  // };

  // changeCurrency() {

  //   let newCurency = '$';
  //   let coefficient = 1;

  //   if (this.currency === '$') {
  //     newCurency = '₽';
  //     coefficient = 80;
  //   } else if (this.currency === '₽') {
  //     newCurency = 'BYN';
  //     coefficient = 3;
  //   } else if (this.currency === 'BYN') {
  //     newCurency = '€';
  //     coefficient = 0.9;
  //   } else if (this.currency === '€') {
  //     newCurency = '¥';
  //     coefficient = 6.9;
  //   };

  //   this.currency = newCurency;

  //   this.productsData.forEach((item: any) => {
  //     item.price = +(item.basePrice * coefficient).toFixed(1);
  //   });
  // };
};




