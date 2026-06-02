import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface OngoingProject {
  title: string;
  client: string;
  status: string;
  progress: number;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  projectsCompleted: number = 25;

  yearsExperience: number = 3;

  uiProjects: number = 40;

  clientSatisfaction: number = 98;

  activeSkill: string | null = null;

  toggleSkill(id: string) {
    this.activeSkill = this.activeSkill === id ? null : id;
  }

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

  designProcess = [

    {
      number: '01',
      image: 'assets/icons/idea.png',
      title: 'Understand Your Idea',
      description:
        'Understanding users, goals, and problems through research and analysis.'
    },

    {
      number: '02',
      image: 'assets/icons/pencil.png',
      title: 'Plan & Wireframe',
      description:
        'Planning user flows, structure, and experience before designing.'
    },

    {
      number: '03',
      image: 'assets/icons/nib-with-arc.png',
      title: 'Design with Love',
      description:
        'Creating simple layouts to organize content and interactions clearly.'
    },

    {
      number: '04',
      image: 'assets/icons/website.png',
      title: 'Prototype & Test',
      description:
        'Designing modern and user-friendly interfaces with strong visuals.'
    },

    {
      number: '05',
      image: 'assets/icons/launch.png',
      title: 'Deliver & Support',
      description:
        'Building interactive prototypes to test user experience and flows.'
    }


  ];

  ongoingProjects: OngoingProject[] = [

    {
      title: 'Healthcare Management System',
      client: 'Confidential Client',
      status: 'In Progress',
      progress: 75,
      description:
        'Building a modern healthcare platform with appointment scheduling, patient records, and reporting features.',
      technologies: ['Angular', '.NET Core', 'Azure', 'SQL Server']
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

