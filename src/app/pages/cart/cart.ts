import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../shared/service/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pt-24 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-8">Your Cart</h1>
        
        <div *ngIf="cartService.cartItems().length === 0" class="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-slate-300 dark:text-slate-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 class="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p class="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <a routerLink="/products" class="px-8 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition">Continue Shopping</a>
        </div>

        <div *ngIf="cartService.cartItems().length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="md:col-span-2 space-y-4">
            <div *ngFor="let item of cartService.cartItems()" class="flex items-center space-x-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div class="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img [src]="item.image" [alt]="item.title" class="w-full h-full object-cover">
              </div>
              <div class="flex-grow">
                <h3 class="text-lg font-bold">{{ item.title }}</h3>
                <p class="text-orange-600 dark:text-orange-400 font-bold mb-2">\${{ item.price }}</p>
                
                <div class="flex items-center space-x-4">
                  <div class="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8 w-24">
                    <button (click)="cartService.updateQuantity(item.id, item.quantity - 1)" class="w-8 flex justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition">-</button>
                    <span class="w-8 flex justify-center text-sm font-medium">{{ item.quantity }}</span>
                    <button (click)="cartService.updateQuantity(item.id, item.quantity + 1)" class="w-8 flex justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition">+</button>
                  </div>
                  <button (click)="cartService.removeFromCart(item.id)" class="text-red-500 hover:text-red-600 text-sm font-medium">Remove</button>
                </div>
              </div>
              <div class="font-bold text-lg hidden sm:block">
                \${{ item.price * item.quantity | number:'1.2-2' }}
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-fit sticky top-24">
            <h3 class="text-xl font-bold mb-4">Order Summary</h3>
            
            <div class="space-y-3 mb-6 text-slate-600 dark:text-slate-400">
              <div class="flex justify-between">
                <span>Subtotal ({{ cartService.cartCount() }} items)</span>
                <span class="text-slate-900 dark:text-white font-medium">\${{ cartService.cartTotal() | number:'1.2-2' }}</span>
              </div>
              <div class="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div class="h-px bg-slate-200 dark:bg-slate-700 my-4"></div>
              <div class="flex justify-between text-lg font-bold text-slate-900 dark:text-white">
                <span>Total</span>
                <span>\${{ cartService.cartTotal() | number:'1.2-2' }}</span>
              </div>
            </div>

            <button (click)="checkout()" class="w-full py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-600/30 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
              <span>Checkout</span>
            </button>
            <p class="text-center text-sm text-slate-400 mt-4">Secure checkout powered by Razorpay</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CartComponent {
  cartService = inject(CartService);

  checkout() {
    const amount = this.cartService.cartTotal() * 100; // Razorpay expects paise
    const options: any = {
      key: 'rzp_test_sample',
      amount: amount,
      currency: 'INR',
      name: 'tetrichdesigns',
      description: 'Cart Checkout',
      handler: (response: any) => {
        alert('Payment successful: ' + response.razorpay_payment_id);
        this.cartService.clearCart();
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999'
      },
      theme: { color: '#4f46e5' }
    };

    if ((window as any)['Razorpay']) {
      const rzp = new (window as any)['Razorpay'](options);
      rzp.open();
    } else {
      alert('Razorpay SDK not loaded. Simulating successful checkout.');
      this.cartService.clearCart();
    }
  }
}
