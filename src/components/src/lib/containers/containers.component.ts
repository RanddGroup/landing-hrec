import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DoubleContainerComponent } from '@landing-hrec/shareds';

@Component({
  selector: 'lib-containers',
  standalone: true,
  imports: [CommonModule, DoubleContainerComponent],
  templateUrl: './containers.component.html',
  styleUrl: './containers.component.scss',
})
export class ContainersComponent {}
