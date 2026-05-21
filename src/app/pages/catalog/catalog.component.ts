import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class CatalogComponent implements OnInit, OnDestroy{

  products: Product[] = [];

  current = 0;
  totalSlide=3;
  autoSlide: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.products = this.productService.getProducts();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlide);
  }

  showSlide(index: number): void {
    this.current = index;
  }

  nextSlide(): void {
    this.current++;

    if (this.current >= this.totalSlide) {
      this.current = 0;
    }
     console.log('slide:', this.current);

    this.showSlide(this.current);
  }

  prevSlide(): void {
    this.current--;

    if (this.current < 0) {
      this.current = this.totalSlide- 1;
    }

    this.showSlide(this.current);
  }

  startAutoSlide(): void {

    console.log('startAutoSlide')
    if (this.autoSlide){
      clearInterval(this.autoSlide)
    }
    this.autoSlide = setInterval(() => {
      console.log('timer', this.current);
      this.nextSlide();
    }, 4000);
  }
}