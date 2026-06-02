import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { BlogService } from '../../services/blog';

@Component({
  selector: 'app-blog-editor',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    QuillModule
  ],

  templateUrl: './blog-editor.html',

  styleUrls: ['./blog-editor.css']
})

export class BlogEditor {

  @Output() close = new EventEmitter<void>();

  title = '';

  description = '';

  category = '';

  publishDate = '';

  content = '';
  image = '';

  readTime = '';

  snippet = '';

  constructor(
    private blogService: BlogService
  ) { }

  closeModal() {

    this.close.emit();

  }

  async publishBlog() {

    console.log('BUTTON WORKING');

    const blogData = {

  title: this.title,

  description: this.description,

  category: this.category,

  publishDate: this.publishDate,

  content: this.content,

  image: this.image,

  readTime: this.readTime,

  snippet: this.snippet,

  createdAt: new Date()

};

    try {

      await this.blogService.addBlog(blogData);

      alert('Blog Published Successfully!');

      this.closeModal();

    }

    catch (error) {

      console.error(error);

      alert('Something went wrong');

    }

  }

}