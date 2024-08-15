import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-clients-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-carousel.component.html',
  styleUrl: './clients-carousel.component.scss',
})
export class ClientsCarouselComponent {
  clients: Teste[] = [
    {
      id: 1,
      name: 'Hot Dog Expresso',
      image: 'assets/clients/hot-dog.png',
    },
    {
      id: 2,
      name: 'Lera Pepper',
      image: 'assets/clients/lera-pepper.png',
    },
    {
      id: 3,
      name: 'Matheus Lera',
      image: 'assets/clients/matheus-lera.png',
    },
    {
      id: 4,
      name: 'Pasta Way',
      image: 'assets/clients/pasta-way.png',
    },
    {
      id: 5,
      name: 'Zibrow',
      image: 'assets/clients/zibrow-barbearia.png',
    },
    {
      id: 11,
      name: 'Hot Dog Expresso',
      image: 'assets/clients/hot-dog.png',
    },
    {
      id: 12,
      name: 'Lera Pepper',
      image: 'assets/clients/lera-pepper.png',
    },
    {
      id: 13,
      name: 'Matheus Lera',
      image: 'assets/clients/matheus-lera.png',
    },
    {
      id: 14,
      name: 'Pasta Way',
      image: 'assets/clients/pasta-way.png',
    },
    {
      id: 15,
      name: 'Zibrow',
      image: 'assets/clients/zibrow-barbearia.png',
    },
    {
      id: 111,
      name: 'Hot Dog Expresso',
      image: 'assets/clients/hot-dog.png',
    },
    {
      id: 112,
      name: 'Lera Pepper',
      image: 'assets/clients/lera-pepper.png',
    },
    {
      id: 113,
      name: 'Matheus Lera',
      image: 'assets/clients/matheus-lera.png',
    },
    {
      id: 114,
      name: 'Pasta Way',
      image: 'assets/clients/pasta-way.png',
    },
    {
      id: 115,
      name: 'Zibrow',
      image: 'assets/clients/zibrow-barbearia.png',
    },
    {
      id: 1111,
      name: 'Hot Dog Expresso',
      image: 'assets/clients/hot-dog.png',
    },
    {
      id: 1112,
      name: 'Lera Pepper',
      image: 'assets/clients/lera-pepper.png',
    },
    {
      id: 1113,
      name: 'Matheus Lera',
      image: 'assets/clients/matheus-lera.png',
    },
    {
      id: 1114,
      name: 'Pasta Way',
      image: 'assets/clients/pasta-way.png',
    },
    {
      id: 1115,
      name: 'Zibrow',
      image: 'assets/clients/zibrow-barbearia.png',
    },
  ];
}

export interface Teste {
  id: number;
  name: string;
  image: string;
}
