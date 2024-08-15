import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-double-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './double-container.component.html',
  styleUrl: './double-container.component.scss',
})
export class DoubleContainerComponent {}
