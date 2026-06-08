import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Line } from '../../core/models/line.models';
import { ProductService } from '../../core/services/product.service';
import { Header } from "../../shared/componets/header/header";
import { clients } from '../../core/models/client.models';
import { CLIENTS } from '../../core/data/client.mocks';
import { kits } from '../../core/models/kits.models';
import { kitsService } from '../../core/services/kits.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgClass, Header, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit, OnDestroy {

  // =========================
  // ESTADOS PRINCIPAIS
  // =========================
  lines: Line[] = [];
  
  kits: kits[] = [];
  selectedKits: kits | null = null;
  zoomedImage: string | null = null;
  lineKits: kits[] = [];
  
  cart: any[] = [];

  // =========================
  // GETTERS (CARRINHO)
  // =========================
  get cartCount(): number {
    return this.cart.reduce((total, item) => total + item.quantidade, 0);
  }

  get totalItens(): number {
    return this.cart.reduce((total, item) => total + item.quantidade, 0);
  }

  get totalPreco(): number {
    return this.cart.reduce(
      (total, item) => total + (item.quantidade * item.precoNumerico),
      0
    );
  }

  // =========================
  // VARIÁVEIS DE CONTROLE
  // =========================
  selectedLine: Line | null = null; // Atualizado para armazenar a Linha inteira
  
  contatos: clients[] = CLIENTS;
  showModal = false;
  showKitsModal = false;

  current = 0;
  totalSlides = 3;
  autoSlide: any;
  consultor: any;

  constructor(
    private productService: ProductService,
    private kitsService: kitsService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 1. Carrega as linhas
    this.lines = this.productService.getProducts();

    // 2. Carrega os Kits
    this.kits = this.kitsService.getkits();

    // 3. Lógica do Consultor/Slug
    const slug = this.route.snapshot.paramMap.get('name');
    if (slug) {
      this.consultor = this.contatos.find(c => c.slug === slug);
    }

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
  // MODAL DA LINHA/COLEÇÃO
  // =========================
  openLineModal(line: Line): void {
    this.selectedLine = line; 
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedLine = null;
  }

  // =========================
  // MODAL DE KITS
  // =========================
  openKitsModal(kitSelecionado: kits): void {
    this.selectedKits = kitSelecionado;
    this.lineKits = this.kits.filter(
      k => k.line === kitSelecionado.line && k.idKit !== kitSelecionado.idKit
    );
    this.showKitsModal = true;
  }

  closeKitsModal(): void {
    this.showKitsModal = false;
    this.selectedKits = null;
    this.lineKits = [];
  }

  // =========================
  // CARRINHO
  // =========================
  addToCart(product: any): void {
    let precoTexto = '';
    
    // Verifica se o preço de desconto existe ou está preenchido
    if (!product.price_descont || product.price_descont.trim() === '') {
       precoTexto = product.price;
    } else {
       precoTexto = product.price_descont;
    }
    
    // Converte a string "R$ XX,XX" para o formato numérico
    const precoNumerico = Number( 
      precoTexto
        .replace(/[^0-9,]/g, '')
        .replace(',', '.')
    );

    const existingItem = this.cart.find(item => item.id === product.id);

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
    const item = this.cart.find(item => item.id === id);
    if (item) {
      item.quantidade++;
      this.updateCart();
    }
  }

  diminuirQuantidade(id: number): void {
    const item = this.cart.find(item => item.id === id);
    if (item) {
      item.quantidade--;
      if (item.quantidade <= 0) {
        this.cart = this.cart.filter(p => p.id !== id);
      }
      this.updateCart();
    }
  }

  removerItem(id: number): void {
    this.cart = this.cart.filter(item => item.id !== id);
    this.updateCart();
  }

  updateCart(): void {
    // Lógica futura para atualizar local storage ou enviar para outros componentes
  }
  // =========================
  // ZOOM DA IMAGEM (LIGHTBOX)
  // =========================
  openZoom(imageUrl: string): void {
    this.zoomedImage = imageUrl;
  }

  closeZoom(): void {
    this.zoomedImage = null;
  }


  // =========================
  // WHATSAPP
  // =========================
  openWhatsapp(): void {
    window.open(this.getWhatsappLink(), '_blank');
  }

  getWhatsappLink(): string {
    if (!this.consultor) {
      return 'https://wa.me/553183453133';
    }

    const mensagem = encodeURIComponent('Olá, gostaria de mais informações.');
    return `https://wa.me/${this.consultor.telefone}?text=${mensagem}`;
  }

}