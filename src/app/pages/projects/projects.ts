import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './projects.html',
    styleUrls: ['./projects.css']
})
export class ProjectsComponent {

    selectedCategory = 'All';

    categories = [
        'Digital Illustration',
        'Game UI',
        'UI UX',
        'Branding',
        'Mobile App UI',
        'Landing page design',
        'Web Design'
    ];

    projects = [

        {
            id: 1,
            icon: 'assets/images/coffee.jpg',
            title: 'Coffee website landing pages',
            category: 'Landing page design',
            description: 'Modern coffee brand landing page UI design.'
        },

        {
            id: 2,
            icon: 'assets/images/Ebike.jpg',
            title: 'Bijiliride - E-bike rental app',
            category: 'Mobile App UI',
            description: 'E-bike rental mobile app experience design.'
        },

        {
            id: 3,
            icon: 'assets/images/dhaadyism.jpg',
            title: 'Dhaadyism - Mushtache & Beard oil brand',
            category: 'Branding',
            description: 'Brand identity and packaging design.'
        },

        {
            id: 4,
            icon: 'assets/images/mario.jpg',
            title: 'Mario Documentation',
            category: 'Game UI',
            description: 'Game UX and documentation project.'
        },

        {
            id: 5,
            icon: 'assets/images/stitch-ux.jpg',
            title: 'Tailorbird - Garment stitching app',
            category: 'UI UX',
            description: 'Garment stitching mobile app UX design.'
        },

        {
            id: 6,
            icon: 'assets/images/stitch-ui.jpg',
            title: 'Tailorbird - Garment stitching app',
            category: 'UI UX',
            description: 'Garment stitching mobile app UI design.'
        },

        {
            id: 7,
            icon: 'assets/images/courier-ux.jpg',
            title: 'Courier app - UX project',
            category: 'UI UX',
            description: 'Independent and Multiple courier mobile app UX design.'
        },

        {
            id: 8,
            icon: 'assets/images/courier-ui.jpg',
            title: 'Courier app - UI project',
            category: 'UI UX',
            description: 'Independent and Multiple courier mobile app UI design.'
        },
        {
            id: 9,
            icon: 'assets/images/illus.png',
            title: '2D flat illustrations',
            category: 'Digital illustration',
            description: 'Game UX and documentation project.'
        }

    ];

    filteredProjects = [...this.projects];

    filterProjects(category: string) {

        this.selectedCategory = category;

        if (category === 'All') {

            this.filteredProjects = this.projects;

        } else {

            this.filteredProjects = this.projects.filter(
                project => project.category === category
            );

        }

    }

}