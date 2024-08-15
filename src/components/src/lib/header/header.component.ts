import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  socialButtonList: SocialButton[] = [
    {
      id: 1,
      image: 'assets/icon/social/instagram.svg',
      url: '',
      detail: 'h.recpro',
    },
    {
      id: 2,
      image: 'assets/icon/social/whatsapp.svg',
      url: '',
      detail: 'Entre em contato',
    },
  ];
}

export interface SocialButton {
  id: number;
  image: string;
  url: string;
  detail: string;
}
