import { Injectable, computed, signal } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      title: 'UI/UX Project Notebook',
      category: 'Physical Product',
      price: 29.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
      description: 'A premium dotted notebook designed specifically for UI/UX designers to wireframe and jot down ideas quickly.',
      tags: ['Notebook', 'Wireframing', 'Physical']
    },
    {
      id: 2,
      title: 'Neon UI Kit',
      category: 'Design System',
      price: 49,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A premium',
      tags: ['Figma', 'UI Kit']
    },
    {
      id: 3,
      title: 'E-Commerce App Wireframes',
      category: 'Wireframes',
      price: 29,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Over 100+ meticulously crafted wireframes to kickstart your next e-commerce mobile application.',
      tags: ['Wireframes', 'Mobile', 'UX']
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
