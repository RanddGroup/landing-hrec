import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-company-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-carousel.component.html',
  styleUrl: './company-carousel.component.scss',
})
export class CompanyCarouselComponent {
  products: Teste[] = [
    {
      name: 'Bamboo Watch',
      image: 'bamboo-watch.jpg',
    },
    {
      name: 'Black Watch',
      image: 'black-watch.jpg',
    },
    {
      name: 'Blue Band',
      image: 'blue-band.jpg',
    },
    {
      name: 'Blue T-Shirt',
      image: 'blue-t-shirt.jpg',
    },
    {
      name: 'Bracelet',
      image: 'bracelet.jpg',
    },
    {
      name: 'Brown Purse',
      image: 'brown-purse.jpg',
    },
    {
      name: 'Chakra Bracelet',
      image: 'chakra-bracelet.jpg',
    },
    {
      name: 'Galaxy Earrings',
      image: 'galaxy-earrings.jpg',
    },
    {
      name: 'Game Controller',
      image: 'game-controller.jpg',
    },
    {
      name: 'Gaming Set',
      image: 'gaming-set.jpg',
    },
    {
      name: 'Gold Phone Case',
      image: 'gold-phone-case.jpg',
    },
    {
      name: 'Green Earbuds',
      image: 'green-earbuds.jpg',
    },
    {
      name: 'Green T-Shirt',
      image: 'green-t-shirt.jpg',
    },
    {
      name: 'Grey T-Shirt',
      image: 'grey-t-shirt.jpg',
    },
    {
      name: 'Headphones',
      image: 'headphones.jpg',
    },
    {
      name: 'Light Green T-Shirt',
      image: 'light-green-t-shirt.jpg',
    },
    {
      name: 'Lime Band',
      image: 'lime-band.jpg',
    },
    {
      name: 'Mini Speakers',
      image: 'mini-speakers.jpg',
    },
    {
      name: 'Painted Phone Case',
      image: 'painted-phone-case.jpg',
    },
    {
      name: 'Pink Band',
      image: 'pink-band.jpg',
    },
    {
      name: 'Pink Purse',
      image: 'pink-purse.jpg',
    },
    {
      name: 'Purple Band',
      image: 'purple-band.jpg',
    },
    {
      name: 'Purple Gemstone Necklace',
      image: 'purple-gemstone-necklace.jpg',
    },
    {
      name: 'Purple T-Shirt',
      image: 'purple-t-shirt.jpg',
    },
    {
      name: 'Shoes',
      image: 'shoes.jpg',
    },
    {
      name: 'Sneakers',
      image: 'sneakers.jpg',
    },
    {
      name: 'Teal T-Shirt',
      image: 'teal-t-shirt.jpg',
    },
    {
      name: 'Yellow Earbuds',
      image: 'yellow-earbuds.jpg',
    },
    {
      name: 'Yoga Mat',
      image: 'yoga-mat.jpg',
    },
    {
      name: 'Yoga Set',
      image: 'yoga-set.jpg',
    },
  ];
}

export interface Teste {
  name: string;
  image: string;
}
