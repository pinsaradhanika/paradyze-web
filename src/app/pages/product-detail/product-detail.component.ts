import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink  } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductCardComponent, UpperCasePipe, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  selectedSize = '';
  selectedColor = '';
  quantity = 1;

  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    const products = this.productService.getProducts();

    this.product = products.find(p => p.id === id)!;

    if (this.product) {
      this.selectedSize = this.product.sizes[0];
      this.selectedColor = this.product.colors[0];

      this.relatedProducts = products
        .filter(p => p.id !== this.product.id)
        .slice(0, 4);
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getColorValue(color: string): string {
  const colorMap: Record<string, string> = {
    Blue: '#2f5f8f',
    White: '#f7f3ec',
    Sage: '#A8B99A',
    Beige: '#d8c6a8',
    Sand: '#d9c3a3',
    Ivory: '#f4efe5',
    Green: '#0D4D4D',
    Black: '#000000'
  };

  return colorMap[color] || color;
}
}