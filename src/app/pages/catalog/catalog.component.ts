import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgClass],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  current = 0;
  totalSlides = 3;
  autoSlide: any;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlide);
  }

  nextSlide(): void {
    this.current++;

    if (this.current >= this.totalSlides) {
      this.current = 0;
    }

    this.cdr.detectChanges();
  }

  prevSlide(): void {
    this.current--;

    if (this.current < 0) {
      this.current = this.totalSlides - 1;
    }

    this.cdr.detectChanges();
  }

  startAutoSlide(): void {

    this.autoSlide = setInterval(() => {

      this.current++;

      if (this.current >= this.totalSlides) {
        this.current = 0;
      }

      this.cdr.detectChanges();

    }, 3000);
  }
}