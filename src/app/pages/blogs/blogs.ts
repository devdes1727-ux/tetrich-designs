import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BLOGS, Blog } from '../../data/blogs-data';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './blogs.html',
  styleUrls: ['./blogs.css']
})

export class BlogsComponent {

  searchTerm: string = '';

  selectedCategory: string = 'All';

  categories: string[] = [
    'All',
    'Design',
    'UI/UX',
    'Development',
    'Career',
    'Productivity'
  ];

  blogs: Blog[] = BLOGS;

  filteredBlogs: Blog[] = [...this.blogs];

  filterBlogs(): void {

    const search = this.searchTerm.toLowerCase();

    this.filteredBlogs = this.blogs.filter(blog => {

      const matchesSearch =
        blog.title.toLowerCase().includes(search) ||
        blog.description.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        blog.category === this.selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }

  filterByCategory(category: string): void {

    this.selectedCategory = category;

    this.filterBlogs();

  }

}