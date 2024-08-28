import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-tag-words',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-words.component.html',
  styleUrl: './tag-words.component.scss',
})
export class TagWordsComponent {
  tagWordsList: TagWords[] = [
    {
      id: 1,
      link: '',
      title: 'Vídeos de alta qualidade',
      img: 'assets/template/4k.png',
    },
    {
      id: 2,
      link: '',
      title: 'Preços competitivos',
      img: 'assets/template/price.png',
    },
    {
      id: 3,
      link: '',
      title: 'Produção rápida',
      img: 'assets/template/production.png',
    },
    {
      id: 4,
      link: '',
      title: 'Experiência e profissionalismo',
      img: 'assets/template/experience.png',
    },
  ];
}

export interface TagWords {
  id: number;
  link: string;
  title: string;
  img: string;
}
