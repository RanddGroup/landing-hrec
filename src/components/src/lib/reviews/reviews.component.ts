import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      title: 'Conteúdo que da resultado',
      content: 'Amei todo o processo, vi resultados logo de cara.',
      avatar: 'assets/template/no-image.svg',
      author: 'Alexandra Matos',
      date: '15/07/2024',
    },
    {
      id: 2,
      rating: 5,
      title: 'Personalizado e Completo',
      content:
        'Os vídeos produzidos são da mais alta qualidade e atenderam as minhas espectativas.',
      avatar: 'assets/template/no-image.svg',
      author: 'Jhonatan Ortiz',
      date: '09/07/2024',
    },
    {
      id: 3,
      rating: 2,
      title: 'Ótimo conteúdo, ótimos resultados',
      content: 'Presenciei resultados de verdade, recomendo!',
      avatar: 'assets/template/no-image.svg',
      author: 'Monica Percara',
      date: '15/07/2024',
    },
  ];
}

export interface Review {
  id: number;
  rating: number;
  title: string;
  content: string;
  avatar: string;
  author: string;
  date: string;
}
