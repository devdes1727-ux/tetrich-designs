import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Blog, BLOGS } from '../../data/blogs-data';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrls: ['./blog-detail.css']
})
export class BlogDetailComponent {

  blog?: Blog;
  scrollProgress: number = 0;

  activeSectionId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.blog = BLOGS.find(blog => blog.slug === slug);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    this.scrollProgress = (scrollTop / scrollHeight) * 100;

    // ✅ ADDED — find which heading is currently in view
    if (!this.blog) return;

    const offset = 120;

    const headingIndices = this.blog.content
      .map((block, i) => ({ block, i }))
      .filter(({ block }) => block.type === 'heading')
      .map(({ i }) => i);

    for (let j = headingIndices.length - 1; j >= 0; j--) {
      const id = 'section-' + headingIndices[j];
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        this.activeSectionId = id;
        return;
      }
    }

    this.activeSectionId = 'section-' + (headingIndices[0] ?? 0);

  }

  scrollToSection(sectionId: string): void {

    const element = document.getElementById(sectionId);

    if (element) {

      const offset = 100;

      const topPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });

    }

  }

  shareBlog(): void {

    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl);

    alert('Blog link copied successfully!');

  }

}