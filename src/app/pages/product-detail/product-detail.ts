import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService, Product } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private location = inject(Location);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.product = this.productService.getProductById(id);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      // Optional: show toast notification
    }
  }

  buyNow() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      // Navigate to checkout or open razorpay directly
      this.openRazorpay();
    }
  }
  
  openRazorpay() {
    if(!this.product) return;
    const amount = this.product.price * this.quantity * 100; // Razorpay expects amount in paise
    const options: any = {
      key: 'rzp_test_sample', // Replace with Razorpay Key ID
      amount: amount,
      currency: 'INR',
      name: 'tetrichdesigns',
      description: 'Purchase ' + this.product.title,
      handler: (response: any) => {
        alert('Payment successful: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#0f172a'
      }
    };
    if ((window as any)['Razorpay']) {
      const rzp = new (window as any)['Razorpay'](options);
      rzp.open();
    } else {
      alert('Razorpay SDK not loaded. Simulating successful checkout.');
    }
  }
}
