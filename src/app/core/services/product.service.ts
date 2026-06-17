import { Injectable } from '@angular/core';
import { products } from '../mock-data/products.mock';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return products;
  }

  getProductById(id: string): Product | undefined {
    return products.find(product => product.id === id);
  }
}