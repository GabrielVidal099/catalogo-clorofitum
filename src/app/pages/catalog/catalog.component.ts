import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { Header } from "../../shared/componets/header/header";
import { ActivatedRoute } from '@angular/router';
import { clients } from '../../core/models/client.models';
import { CLIENTS } from '../../core/data/client.mocks';
import { kits } from '../../core/models/kits.models';
import { kitsService } from '../../core/services/kits.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgClass, Header,FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit, OnDestroy {



  // PRODUCTS
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: any[] = [];
  lineProducts: Product[] = [];
  kits: kits[] = [];
  filteredKits: kits [] = [];
  selectedKits: kits | null = null;
  lineKits: kits[] = [];

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
  selectedTitle = '';
  selectedProduct: Product | null = null;
  contatos: clients[] = CLIENTS;
  showModal = false;
  selectedLine: string = '';

  current = 0;
  totalSlides = 3;
  autoSlide: any;
  consultor: any;
  telefone: any;

  constructor(
    private productService: ProductService,
    private kitsService: kitsService,
    private cdr: ChangeDetectorRef,
    private route:ActivatedRoute
  ) {}

 ngOnInit(): void {

  this.products = this.productService.getProducts();
  this.filteredProducts = this.products;

  this.kits = this.kitsService.getkits();
  this.filteredKits = this.kits;

  const slug = this.route.snapshot.paramMap.get('name');

  console.log('slug:', slug);

  if (slug) {
    this.consultor = this.contatos.find(
      c => c.slug === slug
    );
  }

  console.log('consultor:', this.consultor);

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
  // Busca
  // =========================
  filterProducts2(title: string): void {

    this.selectedTitle = title;

    const search = title.toLowerCase().trim();
    if(search.length < 3){
      this.filteredProducts = this.products;
      return;
    }
      this.filteredProducts = this.products.filter(
      p => p.title.toLowerCase().includes(search)
    );

  }
  filterByLine(line: string): void {
  this.selectedLine = line;
  if (!line) {
    this.filteredProducts = this.products;
    return;
  }

  this.filteredProducts = this.products.filter(
    p => p.line === line
  );
}

  // =========================
  // MODAL
  // =========================

  openProductModal(product: Product): void {
  this.selectedProduct = product;
  this.lineProducts = this.products.filter(
    p => p.line === product.line && p.id !== product.id
  );
  this.showModal = true;
}
openKitsModal(kits: kits): void {
this.selectedKits = kits;
this.lineKits = this.kits.filter(
p => p.line === kits.line && p.id !== kits.id
);
this.showModal = true

}

switchProduct(product: Product): void {
  this.selectedProduct = product;
  this.lineProducts = this.products.filter(
    p => p.line === product.line && p.id !== product.id
  );
}

closeModal(): void {
  this.showModal = false;
  this.selectedProduct = null;
  this.lineProducts = [];
}
  // =========================
  // CART
  // =========================

  addToCart(product: any): void {
    let precoTexto = ''
    if(product.price_descont === "" || product.price_descont === " "){
       precoTexto = product.price;
    }
    else{
       precoTexto = product.price_descont;
    }
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
openWhatsapp(): void {
  window.open(this.getWhatsappLink(), '_blank');
}
  getWhatsappLink(): string {
  if (!this.consultor) {
    return 'https://wa.me/553183453133';
  }

  const mensagem = encodeURIComponent(
    'Olá, gostaria de mais informações.'
  );

  return `https://wa.me/${this.consultor.telefone}?text=${mensagem}`;
}

  getCategoryClass(category: string): string {
    if (!category) return 'normal';


    if (category === 'Promoções') {
      return 'promo';
    }

    return 'normal';
  }

}