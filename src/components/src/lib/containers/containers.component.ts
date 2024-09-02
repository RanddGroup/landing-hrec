import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-containers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './containers.component.html',
  styleUrl: './containers.component.scss',
})
export class ContainersComponent {
  isFirstContent = true;
}
