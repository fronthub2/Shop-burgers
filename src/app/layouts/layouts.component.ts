import { Component } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent {
  // currency = '$';


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
}
