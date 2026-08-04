import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  inject,
  signal,
} from '@angular/core';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Line } from '../../core/models/line.models';
import { ProductService } from '../../core/services/product.service';
import { Header } from "../../shared/componets/header/header";
import { clients } from '../../core/models/client.models';
import { CLIENTS } from '../../core/data/client.mocks';
import { kits } from '../../core/models/kits.models';
import { kitsService } from '../../core/services/kits.service';
import { CartService } from '../../core/services/cart.service';
import { ToastService } from '../../core/services/toast.service';
import { BannerService, Banner } from '../../core/services/banner.service';
@Component({

  selector: 'app-catalog',
  standalone: true,
  imports: [NgClass, Header, FormsModule, NgOptimizedImage,SlicePipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit, OnDestroy {
  private bannerService = inject(BannerService);
  bannersSignal = signal<Banner[]>([]);

  // =========================
  // ESTADOS PRINCIPAIS
  // =========================
  get lines() {
    return this.productService.lines();
  }
  
  kits: kits[] = [];
  selectedKits: kits | null = null;
  zoomedImage: string | null = null;
  lineKits: kits[] = [];
 
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
    private route: ActivatedRoute,
    public cartService: CartService,
    public toastService: ToastService,  
  ) {}

ngOnInit(): void {
// Carrega as linhas e kits normalmente
    this.carregarBanners();
    this.kits = this.kitsService.getkits();

    // Lógica do Consultor/Slug
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
  // BANNERS DO BANCO DE DADOS
  // =========================
  carregarBanners(): void {
    this.bannerService.getBanners().subscribe({
      next: (bannersDoBanco) => {
        // Atualiza o sinal com os banners ativos vindos do Supabase
        this.bannersSignal.set(bannersDoBanco);
        this.totalSlides= bannersDoBanco.length;
      },
      error: (erro) => {
        console.error('Erro ao buscar banners do Supabase:', erro);
      }
    });
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
    try {
      let priceText = product.price;
      if (product.selectedShade && product.selectedShade.priceOverride) {
        priceText = product.selectedShade.priceOverride;
      } else if (product.price_descont) {
        priceText = product.price_descont;
      }

      // Envia para o serviço do carrinho e pega o nome formatado de volta
      const finalName = this.cartService.addToCart(product, priceText);
      
      // Dispara o alerta pelo serviço de toast
      this.toastService.trigger(`✅ ${finalName} adicionado ao carrinho!`);

      if (product.selectedShade) {
        product.selectedShade = undefined;
      }
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
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