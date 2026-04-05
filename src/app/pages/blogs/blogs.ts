import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        
        <div class="mb-16">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Thoughts & Ideas</h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Insights, tutorials, and experiences from my journey as a UI/UX designer.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <article *ngFor="let blog of blogs" class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all group flex flex-col">
            <div class="h-64 overflow-hidden">
              <img [src]="blog.image" [alt]="blog.title" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            </div>
            <div class="p-8 flex flex-col flex-grow">
              <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                <span>{{ blog.date }}</span>
                <span class="bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full uppercase text-xs tracking-wider">{{ blog.category }}</span>
              </div>
              <h2 class="text-2xl font-bold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">{{ blog.title }}</h2>
              <p class="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">{{ blog.snippet }}</p>
              
              <div class="mt-auto">
                <a [routerLink]="['/blogs', blog.id]" class="inline-flex items-center font-bold text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

        </div>

      </div>
    </div>
  `
})
export class BlogsComponent {
  blogs = [
    {
      id: 1,
      title: 'Beginner Guide to UI/UX Design',
      date: 'Oct 12, 2026',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      snippet: 'Starting in UI/UX can feel overwhelming. This guide breaks down the essential principles, tools, and mindsets you need to kickstart your career.'
    },
    {
      id: 2,
      title: 'Difference Between UI and UX',
      date: 'Sep 28, 2026',
      category: 'Concept',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      snippet: 'Often used interchangeably, UI and UX are distinct disciplines. We look at where one ends and the other begins, and how they work in harmony.'
    },
    {
      id: 3,
      title: 'How to Create Case Study Portfolio',
      date: 'Sep 10, 2026',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1507238692062-5a042e9a37c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      snippet: 'Your portfolio is your biggest asset. Learn how to structure your case studies to highlight your problem-solving skills and design thinking.'
    },
    {
      id: 4,
      title: 'Mobile First Design Principles',
      date: 'Aug 22, 2026',
      category: 'Responsive',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      snippet: 'With mobile traffic dominating the web, designing for the smallest screen first isn\'t just a trend—it\'s a fundamental necessity for modern products.'
    },
    {
      id: 5,
      title: 'Design Systems Explained',
      date: 'Aug 05, 2026',
      category: 'Systems',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      snippet: 'A deep dive into building and maintaining a comprehensive design system that scales with your product and aligns engineering with design.'
    }
  ];
}
