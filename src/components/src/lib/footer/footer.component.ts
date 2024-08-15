import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navFooterList: FooterNav[] = [
    {
      id: 1,
      href: '#',
      detail: 'Termos de uso',
    },
    {
      id: 2,
      href: '#',
      detail: 'Política de Privacidade',
    },
    {
      id: 3,
      href: '#',
      detail: 'LGPD',
    },
  ];
}

export interface FooterNav {
  id: number;
  href: string;
  detail: string;
}
