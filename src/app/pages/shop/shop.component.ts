import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  searchTerm = '';
  selectedCategory = '';
  selectedSize = '';
  selectedColor = '';
  sortBy = 'newest';

  categories: string[] = [];
  sizes: string[] = [];
  colors: string[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];

    this.categories = [...new Set(this.products.map(p => p.category))];
    this.sizes = [...new Set(this.products.flatMap(p => p.sizes))];
    this.colors = [...new Set(this.products.flatMap(p => p.colors))];
  }

  applyFilters(): void {
    let result = [...this.products];

    if (this.searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedCategory) {
      result = result.filter(p => p.category === this.selectedCategory);
    }

    if (this.selectedSize) {
      result = result.filter(p => p.sizes.includes(this.selectedSize));
    }

    if (this.selectedColor) {
      result = result.filter(p => p.colors.includes(this.selectedColor));
    }

    if (this.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    }

    if (this.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    if (this.sortBy === 'newest') {
      result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    }

    this.filteredProducts = result;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedSize = '';
    this.selectedColor = '';
    this.sortBy = 'newest';
    this.filteredProducts = [...this.products];
  }
}