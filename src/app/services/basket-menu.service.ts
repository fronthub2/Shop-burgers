import { Injectable } from '@angular/core';
import { Product } from '../model/product.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class BasketMenuService {
  getBasketProducts(): Product[] {
    const basketProducts = localStorage.getItem('basket');
    if (!basketProducts) return [];

    try {
      return JSON.parse(basketProducts) as Product[];
    } catch (error) {
      console.error('Error parsing products in localStorage', error);
      return [];
    }
  }

  getBasketProductById(productId: number): Product {
    return this.getBasketProducts().find(
      (prod) => prod.id === productId
    ) as Product;
  }

  addBasketProducts(product: Product): void {
    const products = this.getBasketProducts();
    const existingProduct = products.find((prod) => prod.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      products.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(products));
  }

  deleteBasketProducts(productId: number): void {
    const products = this.getBasketProducts();
    const newProducts = products.filter((product) => product.id !== productId);

    localStorage.setItem('basket', JSON.stringify(newProducts));
  }

  hasProductInBasket(productId: number): boolean {
    const products = this.getBasketProducts();
    return products.some((product) => product.id === productId);
  }

  clearBasketProducts(): void {
    localStorage.removeItem('basket');
  }

  addQuantity(product: Product): void {
    const products = this.getBasketProducts();
    const findProduct = products.find((prod) => prod.id === product.id);

    if (findProduct) {
      findProduct.quantity += 1;
      findProduct.price = findProduct.basePrice * findProduct.quantity;
      findProduct.grams = findProduct.baseGrams * findProduct.quantity;
    }

    localStorage.setItem('basket', JSON.stringify(products));
  }

  deleteQuantity(product: Product): void {
    const products = this.getBasketProducts();
    const findProduct = products.find((prod) => prod.id === product.id);

    if (findProduct) {
      findProduct.quantity -= 1;
      findProduct.price -= findProduct.basePrice;
      findProduct.grams = findProduct.baseGrams * findProduct.quantity;

      if (findProduct.quantity < 1) {
        this.deleteBasketProducts(findProduct.id);
        return;
      }

      localStorage.setItem('basket', JSON.stringify(products));
    }
  }
}
