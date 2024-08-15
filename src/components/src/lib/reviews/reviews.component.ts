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
  testimonials: Testimonial[] = [
    {
      rating: 5,
      title: 'Conteúdo que da resultado',
      content: 'Amei todo o processo, vi resultados logo de cara.',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/1b0f959381868efc14fc84f11e3ba96c245e6addd5b9c7ad9b04ed66f43e19be?placeholderIfAbsent=true&apiKey=f7d17e20fda448b0a581fb8bf3cd30ca',
      author: 'Alexandra Matos',
      date: '15/07/2024',
    },
    {
      rating: 5,
      title: 'Personalizado e Completo',
      content:
        'Os vídeos produzidos são da mais alta qualidade e atenderam as minhas espectativas.',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/41b0ca8537c5bd0aa32307e6e379a9161674bfec33203ef353bdf27dacaa3a8c?placeholderIfAbsent=true&apiKey=f7d17e20fda448b0a581fb8bf3cd30ca',
      author: 'Jhonatan Ortiz',
      date: '09/07/2024',
    },
    {
      rating: 5,
      title: 'Ótimo conteúdo, ótimos resultados',
      content: 'Presenciei resultados de verdade, recomendo!',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/0280617057eadd3eaa5f640911dea6b8b83836afc7130a30efb71c445adb82c1?placeholderIfAbsent=true&apiKey=f7d17e20fda448b0a581fb8bf3cd30ca',
      author: 'Monica Percara',
      date: '15/07/2024',
    },
  ];
}

export interface Testimonial {
  rating: number;
  title: string;
  content: string;
  imageSrc: string;
  author: string;
  date: string;
}
