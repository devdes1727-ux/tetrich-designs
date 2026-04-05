import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
          tetrichdesigns
        </div>
        
        <div class="flex space-x-6">
          <a href="#" class="text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition-colors">LinkedIn</a>
          <a href="#" class="text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition-colors">Instagram</a>
          <a href="#" class="text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition-colors">Behance</a>
          <a href="#" class="text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition-colors">Dribbble</a>
        </div>
        
        <div class="text-sm text-slate-500 dark:text-slate-400 mt-4 md:mt-0">
          © 2026 tetrichdesigns — Designed by Punitha
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
