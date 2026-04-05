import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      <div class="max-w-4xl mx-auto">
        
        <button (click)="goBack()" class="flex items-center space-x-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-12 group">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Blogs</span>
        </button>

        <div *ngIf="blog; else notFound">
          <div class="flex items-center space-x-4 text-sm font-bold text-orange-600 dark:text-orange-400 mb-6 uppercase tracking-wider">
            <span>{{ blog.category }}</span>
            <span class="text-slate-300 dark:text-slate-700">•</span>
            <span class="text-slate-500 dark:text-slate-400">{{ blog.date }}</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-12 leading-tight">{{ blog.title }}</h1>
          
          <div class="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-xl">
            <img [src]="blog.image" [alt]="blog.title" class="w-full h-full object-cover">
          </div>

          <article class="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            <p class="text-xl font-medium text-slate-800 dark:text-slate-200 mb-10 leading-relaxed">{{ blog.snippet }}</p>
            
            <p class="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus mattis, cursus tortor eget, tempor est. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Nullam in arcu feugiat, consequat magna vel, ullamcorper libero.
            </p>

            <h2 class="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">The Importance of Process</h2>
            
            <p class="mb-8">
              In congue nisl sed aliquet bibendum. Integer accumsan pretium massa vel eleifend. 
              Vivamus at aliquet dui. Duis lacinia elementum venenatis. Vestibulum egestas dolor ut justo tempus, in scelerisque eros tristique.
            </p>
            
            <ul class="list-disc pl-6 space-y-3 mb-8">
              <li>Always start with user research</li>
              <li>Don't skip the wireframing phase</li>
              <li>Test early and often with real users</li>
              <li>Iterate based on concrete feedback</li>
            </ul>

            <blockquote class="border-l-4 border-orange-600 pl-6 py-2 my-10 italic text-xl text-slate-800 dark:text-slate-200">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>

            <p class="mb-8">
              Phasellus tincidunt ex auctor, pretium arcu quis, sodales risus. Donec vehicula mi velit, in interdum ipsum varius nec. 
              Suspendisse ut massa et nulla pharetra vehicula sit amet varius sem.
            </p>

          </article>
          
          <div class="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img src="assets/images/punitha.png" alt="Punitha" class="w-full h-full object-cover">
              </div>
              <div>
                <p class="font-bold">Punitha</p>
                <p class="text-sm text-slate-500">UI/UX Designer</p>
              </div>
            </div>
            
            <div class="flex space-x-4 text-slate-400">
              <button class="hover:text-orange-600 transition p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
            </div>
          </div>

        </div>

        <ng-template #notFound>
          <div class="text-center py-20">
            <h2 class="text-3xl font-bold mb-4">Blog Article Not Found</h2>
            <p class="text-slate-500 mb-8">The post you are looking for does not exist or has been removed.</p>
            <button (click)="goBack()" class="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition">Go Back</button>
          </div>
        </ng-template>

      </div>
    </div>
  `
})
export class BlogDetailComponent implements OnInit {
  blog: any;
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  
  // Mock data matching BlogsComponent
  private blogsData = [
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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.blog = this.blogsData.find(b => b.id === id);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
