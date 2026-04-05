import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">My Services</h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I offer a wide range of design and front-end development services to help you build user-friendly digital products.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div *ngFor="let service of services" class="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 group">
            <div class="w-14 h-14 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              {{ service.icon }}
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{{ service.description }}</p>
            <a href="mailto:tetrichdesigns@gmail.com" class="text-orange-600 dark:text-orange-400 font-semibold hover:underline inline-flex items-center">
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </div>
  `
})
export class ServicesComponent {
  services = [
    { title: 'Website UI/UX', description: 'Designing intuitive, responsive, and beautiful landing pages and full websites from wireframes to high-fidelity prototypes.', icon: '🖥️' },
    { title: 'Mobile App UI/UX', description: 'Creating user-centered and visually stunning mobile app experiences for iOS and Android platforms.', icon: '📱' },
    { title: 'Brand Identity', description: 'Crafting unique logos, color palettes, and brand guidelines to give your business a memorable visual identity.', icon: '🎨' },
    { title: 'Design Systems', description: 'Building scalable, consistent design languages and component libraries for long-term product development.', icon: '🧩' },
    { title: 'UX Research', description: 'Conducting user interviews, usability testing, and persona creation to ensure we build what users really need.', icon: '🔍' },
    { title: 'Interactive Prototyping', description: 'Developing clickable high-fidelity prototypes to test user flows and interactions before development.', icon: '✨' },
    { title: 'Wireframing', description: 'Creating low-fidelity layouts to quickly iterate on structural placement and information architecture.', icon: '📐' },
    { title: 'Logo Design', description: 'Designing versatile and meaningful logos that communicate your core brand values simply and effectively.', icon: '✒️' },
    { title: 'Front-end Implementation', description: 'Translating designs into pixel-perfect reality using HTML, CSS, TypeScript, and Angular architecture.', icon: '💻' }
  ];
}
