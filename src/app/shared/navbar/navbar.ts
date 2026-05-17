import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  cartService = inject(CartService);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  downloadResume() {
    const fileUrl = 'assets/resume/resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Punitha-Resume.pdf';
    link.click();
  }
}

