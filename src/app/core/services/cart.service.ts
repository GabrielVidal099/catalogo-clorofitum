import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Usar Signals (Angular 16+) torna a reatividade infinitamente mais rápida e limpa
  private cartItems = signal<any[]>([]);

  constructor() {
    this.loadCart();
  }

  get items() {
    return this.cartItems.asReadonly();
  }

  get cartCount(): number {
    return this.cartItems().reduce((total, item) => total + item.quantidade, 0);
  }

  get totalPreco(): number {
    return this.cartItems().reduce((total, item) => total + (item.quantidade * item.precoNumerico), 0);
  }

  addToCart(product: any, finalPriceText: string): string {
    const precoNumerico = Number(finalPriceText.replace(/[^0-9,]/g, '').replace(',', '.'));
    const cartItem = { ...product, precoNumerico, quantidade: 1 };

    // LÓGICA DE VARIANTES (CORES / VOLUMAGENS DE OX)
    if (product.selectedShade) {
      cartItem.nameproduct = `${product.nameproduct} (Cor: ${product.selectedShade.code} - ${product.selectedShade.name})`;
      cartItem.id = `${product.id}-${product.selectedShade.code}`;
      
      // =============================================================
      // CORREÇÃO: Força o item do carrinho a usar a imagem da variação (OX)
      // =============================================================
      if (product.selectedShade.imageUrl) {
        cartItem.image = product.selectedShade.imageUrl;
        cartItem.imageCard = product.selectedShade.imageUrl;
      }
    }

    const currentItems = [...this.cartItems()];
    const existingItem = currentItems.find(item => item.id === cartItem.id);

    if (existingItem) {
      existingItem.quantidade++;
      this.cartItems.set(currentItems);
    } else {
      this.cartItems.set([...currentItems, cartItem]);
    }

    this.saveCart();
    return cartItem.nameproduct;
  }

  aumentarQuantidade(id: string | number) {
    this.cartItems.update(items => {
      const item = items.find(i => i.id === id);
      if (item) item.quantidade++;
      return [...items];
    });
    this.saveCart();
  }

  diminuirQuantidade(id: string | number) {
    this.cartItems.update(items => {
      const item = items.find(i => i.id === id);
      if (item) {
        item.quantidade--;
        if (item.quantidade <= 0) {
          return items.filter(i => i.id !== id);
        }
      }
      return [...items];
    });
    this.saveCart();
  }

  removerItem(id: string | number) {
    this.cartItems.update(items => items.filter(i => i.id !== id));
    this.saveCart();
  }

  private saveCart() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('clorofitum_cart', JSON.stringify(this.cartItems()));
    }
  }

  private loadCart() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('clorofitum_cart');
      if (saved) this.cartItems.set(JSON.parse(saved));
    }
  }
}