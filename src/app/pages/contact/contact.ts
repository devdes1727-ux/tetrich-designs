import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-600 text-slate-600 dark:text-white pt-32 pb-24 px-6 md:px-12 transition-colors duration-300 flex items-center">
      <div class="max-w-4xl mx-auto text-center w-full">
        
        <h1 class="text-5xl md:text-7xl font-extrabold mb-8">Let's create something <span class="text-orange-600 dark:text-orange-400">awesome</span> together.</h1>
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Whether you have a wild idea, an ongoing project, or just want to say hi, I'd love to hear from you.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20">
          <a href="mailto:tetrichdesigns@gmail.com" class="px-8 py-5 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition shadow-xl shadow-orange-600/30 flex items-center group w-full sm:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
          
          <a href="tel:8300658968" class="px-8 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition flex items-center group w-full sm:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Me
          </a>
        </div>

        <div class="pt-16 border-t border-slate-200 dark:border-slate-800">
          <p class="text-slate-500 font-medium mb-8 uppercase tracking-widest text-sm">Follow my work</p>
          <div class="flex items-center justify-center space-x-6">
            <a href="#" class="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-110 shadow-sm border border-slate-100 dark:border-slate-700 transition">
              <span class="font-bold">IN</span>
            </a>
            <a href="#" class="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-110 shadow-sm border border-slate-100 dark:border-slate-700 transition">
              <span class="font-bold">IG</span>
            </a>
            <a href="#" class="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-110 shadow-sm border border-slate-100 dark:border-slate-700 transition">
              <span class="font-bold">BE</span>
            </a>
            <a href="#" class="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-110 shadow-sm border border-slate-100 dark:border-slate-700 transition">
              <span class="font-bold">DR</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ContactComponent {}
