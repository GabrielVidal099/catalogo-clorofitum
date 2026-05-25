import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Input() cartCount: number = 0;
  @Input() cart:any[] = [];
  @Output() aumentar = new EventEmitter<number>();
  @Output() diminuir = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
 
  showCart = false;

  toggleCart():void{
    this.showCart = !this.showCart
  }
  get totalPreco(): number{
    const total = this.cart.reduce( (total, item) => total + (item.quantidade * item.precoNumerico), 0
  );
  console.log(total)
    return total

  }
}