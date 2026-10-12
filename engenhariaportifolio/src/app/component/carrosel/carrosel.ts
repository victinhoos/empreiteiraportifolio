import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  image: string;
  title: string;
}

@Component({
  selector: 'app-carrosel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrosel.html', 
  styleUrl: './carrosel.css'      
})
export class Carrosel {
  currentIndex: number = 2; 

  projects: Project[] = [
    { id: 1, image: 'assets/projeto1.jpg', title: 'Casa Residencial 1' },
    { id: 2, image: 'assets/projeto2.jpg', title: 'Casa Residencial 2' },
    { id: 3, image: 'assets/projeto3.jpg', title: 'Mansão Moderna' }, 
    { id: 4, image: 'assets/projeto4.jpg', title: 'Edifício Residencial' },
    { id: 5, image: 'assets/projeto5.jpg', title: 'Projeto Comercial' }
  ];

  next(): void {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projects.length - 1;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}