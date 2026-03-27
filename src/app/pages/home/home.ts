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
      title: "Courier App",
      category: "Mobile App · UI UX Design"
    },

    {
      title: "Tailorbird",
      category: "Mobile App · UI UX Design"
    },

    {
      title: "Parcend",
      category: "Product UX Case Study"
    },

    {
      title: "Invoice Generator",
      category: "Web + Mobile App Design"
    },

    {
      title: "Protein Laddu",
      category: "Logo & Packaging Design"
    },

    {
      title: "DrMVP Healthcare",
      category: "Web + Mobile Healthcare UX"
    }

  ];


  tools = [

    {
      name: "Figma & FigJam",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },

    {
      name: "Sketch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
    },

    {
      name: "Adobe Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
    },

    {
      name: "Adobe Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
    },

    {
      name: "Visual Studio Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },

    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
    },

    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
    },

    {
      name: "Paper & Pencil",
      emoji: "✏"
    },

    {
      name: "Mixpanel",
      emoji: "📊"
    },

    {
      name: "Balsamiq / Storybook / Webflow",
      emoji: "🧩"
    }

  ];


  skills = [

    {
      id: "stitching",
      title: "🧵 Stitching Garments",
      preview: [
        "Measurements",
        "Pattern Making",
        "Fabric Cutting"
      ],
      more: [
        "Stitching",
        "Ironing & Packing"
      ]
    },

    {
      id: "printing",
      title: "🎨 Textile Printing",
      preview: [
        "Batik Printing",
        "Block Printing",
        "Digital Printing"
      ],
      more: [
        "Tie & Dye",
        "Kalamkari Printing"
      ]
    },

    {
      id: "fashion",
      title: "👗 Fashion Design",
      preview: [
        "Sketching & Illustration",
        "Moodboard Creation",
        "Color Theory"
      ],
      more: [
        "Pattern Making",
        "Garment Construction"
      ]
    },

    {
      id: "tshirt",
      title: "👕 T-Shirt Printing",
      preview: [
        "Create Frame with Designs",
        "CMYK Color Separation",
        "Color Pigment Creation"
      ],
      more: [
        "Machine Setup & Process",
        "Ironing & Package"
      ]
    },

    {
      id: "game",
      title: "🎮 Game Design",
      preview: [
        "UX for Games",
        "Level Design",
        "Game Design Fundamentals"
      ],
      more: [
        "Game Engine (Godot)",
        "Testing & Player Psychology"
      ]
    }

  ];

}