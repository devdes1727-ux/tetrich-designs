import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  activeSkill: string | null = null;

  toggleSkill(id: string) {
    this.activeSkill = this.activeSkill === id ? null : id;
  }


  projects = [

    {
      icon: "assets/images/coffee website landing.jpg",
      title: "Website Landing Page",
      category: "Coffee Website Landing Page Design"
    },

    {
      icon: "assets/images/Ebike.jpg",
      title: "Bijiliride",
      category: "E-bike Rental servicemobile app design"
    },

    {
      icon: "assets/images/dhaadyism.jpg",
      title: "Dhaadyism",
      category: "Logo Design & Branding for beard oil brand"
    },

    {
      icon: "assets/images/mario.jpg",
      title: "Game Design Documentation",
      category: "Mario Game Dev with Godot Engine"
    },

    {
      icon: "assets/images/stitch ux.jpg",
      title: "Tailorbird",
      category: "Garment stitching service mobile app design - UX Research & Wireframing"
    },

    {
      icon: "assets/images/stitch ui.jpg",
      title: "Tailorbird",
      category: "Garment stitching service mobile app design - UI Design"
    },

    {
      icon: "assets/images/courier ux.jpg",
      title: "Courier Service App",
      category: "Induvidual & multiple Courier Service App UX Research & Wireframing"
    },

    {
      icon: "assets/images/courier ui.jpg",
      title: "Courier Service App",
      category: "Induvidual & multiple Courier Service App UI Design"
    }

  ];


  tools = [

    {
      name: "Figma & FigJam",
      icon: "assets/images/figma.png"
    },

    {
      name: "Sketch",
      icon: "assets/images/sketch.png"
    },

    {
      name: "Adobe Photoshop",
      icon: "assets/images/photoshop.png "
    },

    {
      name: "Adobe Illustrator",
      icon: "assets/images/illustrator.png"
    },

    {
      name: "Visual Studio Code",
      icon: "assets/images/vscode.png"
    },

    {
      name: "WordPress",
      icon: "assets/images/wordpress.png"
    },

    {
      name: "Storybook",
      icon: "assets/images/storybook.png"
    },

    {
      name: "Paper & Pencil",
      icon: "assets/images/paperpencil.png"
    },

    {
      name: "Mixpanel",
      icon: "assets/images/mixpanel.png"
    },

    {
      name: "Balsamiq",
      icon: "assets/images/balsamiq.png"
    },

    {
      name: "webflow",
      icon: "assets/images/webflow.png"
    }


  ];


  skills = [

    {
      id: "stitching",
      title: "Stitching Garments",
      preview: [
        "Measurements",
        "Pattern Making",
        "Fabric Cutting",
        "Stitching",
        "Ironing & Packing"
      ],
      more: [
        "Stitching",
        "Ironing & Packing"
      ]
    },

    {
      id: "printing",
      title: "Textile Printing",
      preview: [
        "Batik Printing",
        "Block Printing",
        "Digital Printing",
        "Tie & Dye",
        "Kalamkari Printing"
      ],
      more: [
        "Tie & Dye",
        "Kalamkari Printing"
      ]
    },

    {
      id: "fashion",
      title: "Fashion Design",
      preview: [
        "Sketching & Illustration",
        "Moodboard Creation",
        "Color Theory",
        "Pattern Making",
        "Garment Construction"
      ],
      more: [
        "Pattern Making",
        "Garment Construction"
      ]
    },

    {
      id: "tshirt",
      title: "T-Shirt Printing",
      preview: [
        "Frame making with Designs",
        "CMYK Color Separation",
        "Color Pigment Creation",
        "Machine Setup & Process",
        "Ironing & Package"
      ],
      more: [
        "Machine Setup & Process",
        "Ironing & Package"
      ]
    },

    {
      id: "game",
      title: "Game Design",
      preview: [
        "UX for Games",
        "Level Design",
        "Game Design Fundamentals",
        "Game Engine (Godot)",
        "Testing & Player Psychology"
      ],
      more: [
        "Game Engine (Godot)",
        "Testing & Player Psychology"
      ]
    }

  ];

}