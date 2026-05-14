import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  cartTotal = computed(() => {
    return this.cartItems().reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  });
  
  cartCount = computed(() => {
    return this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0);
  });

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const saved = localStorage.getItem('tetrich_cart');
    if (saved) {
      try {
        this.cartItems.set(JSON.parse(saved));
      } catch (e) {
        this.cartItems.set([]);
      }
    }
  }

  private saveCart() {
    localStorage.setItem('tetrich_cart', JSON.stringify(this.cartItems()));
  }

  addToCart(product: any, quantity: number = 1) {
    this.cartItems.update(items => {
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        existing.quantity += quantity;
        return [...items];
      } else {
        return [...items, { id: product.id, title: product.title, price: product.price, image: product.image, quantity }];
      }
    });
    this.saveCart();
  }

  removeFromCart(id: number) {
    this.cartItems.update(items => items.filter(i => i.id !== id));
    this.saveCart();
  }

  updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(id);
      return;
    }
    this.cartItems.update(items => {
      const item = items.find(i => i.id === id);
      if (item) item.quantity = quantity;
      return [...items];
    });
    this.saveCart();
  }
  
  clearCart() {
    this.cartItems.set([]);
    this.saveCart();
  }
}
