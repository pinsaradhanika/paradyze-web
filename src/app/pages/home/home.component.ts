import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { NewsletterComponent } from '../../shared/components/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCardComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  newArrivals: Product[] = [];
  bestSellers: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.newArrivals = products.filter(p => p.isNew).slice(0, 4);
    this.bestSellers = products.filter(p => p.isBest).slice(0, 4);
  }
}