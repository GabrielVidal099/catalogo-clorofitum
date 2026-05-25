import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';

import { NgClass } from '@angular/common';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { Header } from "../../shared/componets/header/header";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgClass, Header],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit, OnDestroy {



  // PRODUCTS
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: any[] = [];

  // CART COUNT
  get cartCount(): number {
    return this.cart.reduce(
      (total, item) => total + item.quantidade,
      0
    );
  }

  // TOTALS
  get totalItens(): number {
    return this.cart.reduce(
      (total, item) => total + item.quantidade,
      0
    );
  }

  get totalPreco(): number {
    return this.cart.reduce(
      (total, item) =>
        total + (item.quantidade * item.precoNumerico),
      0
    );
  }

  selectedCategory = 'Promoções';
  selectedProduct: Product | null = null;
  showModal = false;

  current = 0;
  totalSlides = 3;
  autoSlide: any;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlide);
  }

  // =========================
  // SLIDER
  // =========================

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

  // =========================
  // FILTER
  // =========================

  filterProducts(category: string): void {

    this.selectedCategory = category;

    this.filteredProducts =
      this.products.filter(
        p => p.category === category
      );
  }

  // =========================
  // MODAL
  // =========================

  openProductModal(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }

  // =========================
  // CART
  // =========================

  addToCart(product: any): void {

    const precoTexto =
      product.price_descont || product.price;

    const precoNumerico = Number(
      precoTexto
        .replace(/[^0-9,]/g, '')
        .replace(',', '.')
    );

    const existingItem = this.cart.find(
      item => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantidade++;
    } else {
      this.cart.push({
        ...product,
        precoNumerico,
        quantidade: 1
      });
    }

    this.updateCart();
  }

  aumentarQuantidade(id: number): void {

    const item = this.cart.find(
      item => item.id === id
    );

    if (item) {
      item.quantidade++;
      this.updateCart();
    }
  }

  diminuirQuantidade(id: number): void {

    const item = this.cart.find(
      item => item.id === id
    );

    if (item) {

      item.quantidade--;

      if (item.quantidade <= 0) {
        this.cart = this.cart.filter(
          p => p.id !== id
        );
      }

      this.updateCart();
    }
  }

  removerItem(id: number): void {

    this.cart = this.cart.filter(
      item => item.id !== id
    );

    this.updateCart();
  }

  // =========================
  // UPDATE HEADER
  // =========================

  updateCart(): void {
    
  }

}