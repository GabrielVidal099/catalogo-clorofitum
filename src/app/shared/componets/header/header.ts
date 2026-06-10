import { Component, Output, Input, EventEmitter, ViewChild, ElementRef, input } from '@angular/core';
import { clients } from '../../../core/models/client.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() kits:any[] = [];
  @Input() products: any[] = [];
  @Input() cartCount: number = 0;
  @Input() cart:any[] = [];
  @Input() consultor: any;
  @Output() filtredTitle = new EventEmitter<string>();
  @Output() aumentar = new EventEmitter<number>();
  @Output() diminuir = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
   
 
  showCart = false;

  onSearch(value: string) {
    this.filtredTitle.emit(value);
  }

  toggleCart():void{
    this.showCart = !this.showCart
  }

  get totalPreco(): number{
    const total = this.cart.reduce( (total, item) => total + (item.quantidade * item.precoNumerico), 0
  );
  
    return total

  }

  totalPrice(item: any):number{
    console.log(item);

    return item.quantidade*item.precoNumerico;
  }

  finalizarPedido(): void {

    if (this.cart.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    let mensagem = `*PEDIDO CLOROFITUM COSMÉTICOS* ━━━━━━━━━━━━━━━━━━`;

    let total = 0;

    this.cart.forEach((item: any, index: number) => {

      const subtotal = item.quantidade * item.precoNumerico;
      total += subtotal;

      mensagem += `*Produto ${index + 1}*
      Nome: ${item.nameproduct}
      Categoria: ${item.category}
      Quantidade: ${item.quantidade}
      Valor unitário: R$ ${item.precoNumerico.toFixed(2)}
      Subtotal: R$ ${subtotal.toFixed(2)}
      ━━━━━━━━━━━━━━━━━━`;
    });

    mensagem += `*TOTAL DO PEDIDO: R$ ${total.toFixed(2)}*

    Obrigado pela preferência
    Clorofitum Cosméticos`;

    
    // pega número do consultor pela URL
    let numero = '';
    if (!this.consultor){
      numero =  '553183453133';
    } 
    else{  
      numero = this.consultor.telefone;

    }

    // codifica a mensagem corretamente

    const mensagemCodificada = encodeURIComponent(mensagem);

    const url = `https://wa.me/${numero}?text=${mensagemCodificada}`;

    window.open(url, '_blank');
  }

}
