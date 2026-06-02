import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
 
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbImage: string; // ← add this
  images: string[]; // ← add this
}

const PROJECTS: Project[] = [
  {
    id: 1, 
    title: 'Coffee Website',
    category: 'Web Design',
    thumbImage: 'assets/images/coffee.jpg', // ← add this
    images: ['assets/images/coffee-landing.jpg'], // ← add this
    description: 'A premium coffee brand landing page crafted to increase conversions with bold typography, fast ordering flows, and a polished product story.'
  },

  { id: 2, 
    title: 'Bijiliride', 
    category: 'Mobile App', 
    thumbImage: 'assets/images/Ebike.jpg', // ← add this
    images: [
      'assets/pro-images/ebike1.png', 
      'assets/pro-images/ebike2.png', 
      'assets/pro-images/ebike3.png', 
      'assets/pro-images/ebike4.png', 
      'assets/pro-images/ebike5.png', 
      'assets/pro-images/ebike6.png', 
      'assets/pro-images/ebike7.png', 
      'assets/pro-images/ebike8.png'
    ], // ← add this
    description: 'A rental experience for e-bikes built around accessibility, location-aware ride discovery, and seamless booking for modern commuters.' },

  { id: 3, 
    title: 'Dhaadyism', 
    category: 'Branding', 
    thumbImage: 'assets/images/dhaadyism.jpg', // ← add this
    images: [
      'assets/pro-images/dhadi1.png', 
      'assets/pro-images/dhadi2.png',
      'assets/pro-images/dhadi3.png',
      'assets/pro-images/dhadi4.png',
      'assets/pro-images/dhadi5.png'
    ], // ← add this
    description: 'A refreshed visual identity system for a lifestyle brand, including logo exploration, packaging concepts, and expressive color language.' },

  { id: 4, 
    title: 'Game Docs', 
    category: 'UI UX', 
    thumbImage: 'assets/images/mario.jpg', // ← add this
    images: [
      'assets/pro-images/mario1.png', 
      'assets/pro-images/mario2.png',
      'assets/pro-images/mario3.png',
      'assets/pro-images/mario4.png',
      'assets/pro-images/mario5.png',
      'assets/pro-images/mario6.png',
      'assets/pro-images/mario7.png',
      'assets/pro-images/mario8.png',
    ], // ← add this
    description: 'A documentation portal for game studios that balances playful brand voice with a structured content hierarchy for rapid onboarding.' },
  
  { id: 5, 
    title: 'Tailorbird - Garment Stitching App', 
    category: 'UI UX', 
    thumbImage: 'assets/images/stitch-ux.jpg', // ← add this
    images: [
      'assets/pro-images/stitch-ux1.png', 
      'assets/pro-images/stitch-ux2.png',
      'assets/pro-images/stitch-ux3.png',
      'assets/pro-images/stitch-ux4.png',
      'assets/pro-images/stitch-ux5.png',
      'assets/pro-images/stitch-ux6.png',
      'assets/pro-images/stitch-ux7.png',
      'assets/pro-images/stitch-ux8.png',
      'assets/pro-images/stitch-ux9.png',
      'assets/pro-images/stitch-ux10.png',
      'assets/pro-images/stitch-ux11.png',
      'assets/pro-images/stitch-ux12.png',
      'assets/pro-images/stitch-ux13.png'
    ], // ← add this
    description: 'A collaborative design system for a storytelling platform, optimized for intuitive navigation and user-friendly task flows.' },
  
  { id: 6, 
    title: 'Stitch UI', 
    category: 'UI UX', 
    thumbImage: 'assets/images/stitch-ui.jpg', // ← add this
    images: [
      'assets/pro-images/stitch-ui1.png', 
      'assets/pro-images/stitch-ui2.png',
      'assets/pro-images/stitch-ui3.png',
      'assets/pro-images/stitch-ui4.png',
      'assets/pro-images/stitch-ui5.png',
      'assets/pro-images/stitch-ui6.png',
      'assets/pro-images/stitch-ui7.png',
      'assets/pro-images/stitch-ui8.png',
      'assets/pro-images/stitch-ui9.png',
      'assets/pro-images/stitch-ui10.png',
      'assets/pro-images/stitch-ui11.png',
      'assets/pro-images/stitch-ui12.png'
    ], // ← add this
    description: 'A visually rich interface suite focused on vibrant imagery, clean card layouts, and responsive interactions for creative audiences.' },
  
  { id: 7,  
    title: 'Courier app - UX project', 
    category: 'UI UX', 
    thumbImage: 'assets/images/courier-ux.jpg', // ← add this
    images: [
      'assets/pro-images/courier-ux1.png', 
      'assets/pro-images/courier-ux2.png',
      'assets/pro-images/courier-ux3.png',
      'assets/pro-images/courier-ux4.png',
      'assets/pro-images/courier-ux5.png',
      'assets/pro-images/courier-ux6.png',
      'assets/pro-images/courier-ux7.png',
      'assets/pro-images/courier-ux8.png',
      'assets/pro-images/courier-ux9.png',
      'assets/pro-images/courier-ux10.png',
      'assets/pro-images/courier-ux11.png',
      'assets/pro-images/courier-ux12.png',
      'assets/pro-images/courier-ux13.png',
      'assets/pro-images/courier-ux14.png',
      'assets/pro-images/courier-ux15.png',
      'assets/pro-images/courier-ux16.png',
      'assets/pro-images/courier-ux17.png',
      'assets/pro-images/courier-ux18.png',
      'assets/pro-images/courier-ux19.png'
    ], // ← add this
    description: 'Independent and Multiple courier mobile app UX design.' },
  
  { id: 8, 
    title: 'Courier app - UI project', 
    category: 'UI UX', 
    thumbImage: 'assets/images/courier-ui.jpg', // ← add this
    images: [
      'assets/pro-images/courier-ui1.png', 
      'assets/pro-images/courier-ui2.png',
      'assets/pro-images/courier-ui3.png',
      'assets/pro-images/courier-ui4.png',
      'assets/pro-images/courier-ui5.png',
      'assets/pro-images/courier-ui6.png',
      'assets/pro-images/courier-ui7.png',
      'assets/pro-images/courier-ui8.png',
      'assets/pro-images/courier-ui9.png',
      'assets/pro-images/courier-ui10.png',
      'assets/pro-images/courier-ui11.png',
      'assets/pro-images/courier-ui12.png',
      'assets/pro-images/courier-ui13.png',
      'assets/pro-images/courier-ui14.png',
      'assets/pro-images/courier-ui15.png'
    ], // ← add this
    description: 'Independent and Multiple courier mobile app UI design.' },
  
  { id: 9, 
    title: '2D flat illustrations', 
    category: 'UI Design', 
    thumbImage: 'assets/images/illus.png', // ← add this
    images: [
      'assets/pro-images/illus1.png', 
      'assets/pro-images/illus2.png',
      'assets/pro-images/illus3.png',
      'assets/pro-images/illus4.png',
      'assets/pro-images/illus5.png'
    ], // ← add this
    description: 'A clean logistics dashboard with strong visual hierarchy, streamlined task cards, and consistent feedback patterns for rapid decision making.' }
];

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent implements OnInit {

  projectId: string | null = null;
  project: Project | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectId = id ? id.toString() : null;
    this.project = PROJECTS.find(project => project.id === id);
  }

}