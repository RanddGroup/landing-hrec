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
    },
    {
      id: 2,
      link: '',
      title: 'Preços competitivos',
    },
    {
      id: 3,
      link: '',
      title: 'Produção rápida',
    },
    {
      id: 4,
      link: '',
      title: 'Experiência e profissionalismo',
    },
  ];
}

export interface TagWords {
  id: number;
  link: string;
  title: string;
}
