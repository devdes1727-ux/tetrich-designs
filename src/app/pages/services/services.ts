import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {

  services = [
    {
      title: 'Website UI/UX',
      description: 'Modern responsive website designs focused on usability, performance, and conversion.',
      icon: '🖥️',
      number: '01'
    },
    {
      title: 'Mobile App UI/UX',
      description: 'Beautiful mobile experiences for Android and iOS with intuitive user interactions.',
      icon: '📱',
      number: '02'
    },
    {
      title: 'Brand Identity',
      description: 'Creating logos, typography, colors, and complete visual branding systems.',
      icon: '🎨',
      number: '03'
    },
    {
      title: 'Design Systems',
      description: 'Scalable design systems and reusable UI components for consistent experiences.',
      icon: '🧩',
      number: '04'
    },
    {
      title: 'UX Research',
      description: 'User research, usability testing, and competitor analysis to improve experiences.',
      icon: '🔍',
      number: '05'
    },
    {
      title: 'Front-end Development',
      description: 'Pixel-perfect front-end implementation using Angular, HTML, CSS, and TypeScript.',
      icon: '💻',
      number: '06'
    }
  ];

}