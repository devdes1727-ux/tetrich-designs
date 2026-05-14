import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.html',
  styleUrls: ['./blog-detail.css']
})
export class BlogDetailComponent implements OnInit {

  blog: any;

  private route = inject(ActivatedRoute);
  private location = inject(Location);

  private blogsData = [
    {
      id: 1,
      title: 'Beginner Guide to UI/UX Design',
      date: 'Oct 12, 2026',
      category: 'Design',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      snippet:
        'Starting in UI/UX can feel overwhelming. This guide breaks down the essential principles, tools, and mindsets you need to kickstart your career.'
    },
    {
      id: 2,
      title: 'Difference Between UI and UX',
      date: 'Sep 28, 2026',
      category: 'Concept',
      image:
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      snippet:
        'Often used interchangeably, UI and UX are distinct disciplines. We look at where one ends and the other begins.'
    },
    {
      id: 3,
      title: 'How to Create Case Study Portfolio',
      date: 'Sep 10, 2026',
      category: 'Career',
      image:
        'https://images.unsplash.com/photo-1507238692062-5a042e9a37c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      snippet:
        'Your portfolio is your biggest asset. Learn how to structure your case studies effectively.'
    },
    {
      id: 4,
      title: 'Mobile First Design Principles',
      date: 'Aug 22, 2026',
      category: 'Responsive',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      snippet:
        'With mobile traffic dominating the web, designing for mobile-first experiences is essential.'
    },
    {
      id: 5,
      title: 'Design Systems Explained',
      date: 'Aug 05, 2026',
      category: 'Systems',
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      snippet:
        'A deep dive into building scalable design systems for modern digital products.'
    }
  ];

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      if (id) {
        this.blog = this.blogsData.find(blog => blog.id === id);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}