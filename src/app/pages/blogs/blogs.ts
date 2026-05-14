import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs.html',
  styleUrls: ['./blogs.css']
})
export class BlogsComponent {

  selectedCategory = 'All';

  categories = [
    'All',
    'Design',
    'Concept',
    'Career',
    'Responsive',
    'Systems'
  ];

  blogs = [
    {
      id: 1,
      title: 'Beginner Guide to UI/UX Design',
      date: 'Oct 12, 2026',
      category: 'Design',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      snippet: 'Starting in UI/UX can feel overwhelming. Learn the essential principles, tools, and mindset needed to build a strong foundation.'
    },
    {
      id: 2,
      title: 'Difference Between UI and UX',
      date: 'Sep 28, 2026',
      category: 'Concept',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      snippet: 'UI and UX are often confused. Discover their key differences and how both work together to create better digital products.'
    },
    {
      id: 3,
      title: 'How to Create Case Study Portfolio',
      date: 'Sep 10, 2026',
      category: 'Career',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1507238692062-5a042e9a37c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      snippet: 'A strong portfolio can change your career. Learn how to structure impactful case studies that recruiters actually read.'
    },
    {
      id: 4,
      title: 'Mobile First Design Principles',
      date: 'Aug 22, 2026',
      category: 'Responsive',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      snippet: 'Designing for smaller screens first helps create scalable experiences. Explore modern mobile-first design strategies.'
    },
    {
      id: 5,
      title: 'Design Systems Explained',
      date: 'Aug 05, 2026',
      category: 'Systems',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      snippet: 'Learn how design systems improve consistency, scalability, and collaboration between design and development teams.'
    },
    {
      id: 6,
      title: 'Top UI Trends in 2026',
      date: 'Jul 18, 2026',
      category: 'Design',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      snippet: 'Explore the latest UI trends shaping modern products including glassmorphism, immersive motion, and AI-driven experiences.'
    }
  ];

  get filteredBlogs() {
    if (this.selectedCategory === 'All') {
      return this.blogs;
    }

    return this.blogs.filter(
      blog => blog.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}