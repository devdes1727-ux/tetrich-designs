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
        'UI UX',
        'Branding',
        'Mobile App',
        'Web Design'
    ];

    projects = [

        {
            id: 1,
            icon: 'assets/images/coffee website landing.jpg',
            title: 'Coffee Website',
            category: 'Web Design',
            description: 'Modern coffee brand landing page UI design.'
        },

        {
            id: 2,
            icon: 'assets/images/Ebike.jpg',
            title: 'Bijiliride',
            category: 'Mobile App',
            description: 'E-bike rental mobile app experience design.'
        },

        {
            id: 3,
            icon: 'assets/images/dhaadyism.jpg',
            title: 'Dhaadyism',
            category: 'Branding',
            description: 'Brand identity and packaging design.'
        },

        {
            id: 4,
            icon: 'assets/images/mario.jpg',
            title: 'Mario Documentation',
            category: 'UI UX',
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