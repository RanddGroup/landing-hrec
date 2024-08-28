import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ClientsCarouselComponent,
  ContainersComponent,
  FooterComponent,
  HeaderComponent,
  ReviewsComponent,
  TagWordsComponent,
  VideoFrameComponent,
} from '@landing-hrec/components';
import { CtaViewComponent } from 'src/components/src/lib/cta-view/cta-view.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    ClientsCarouselComponent,
    VideoFrameComponent,
    ReviewsComponent,
    FooterComponent,
    TagWordsComponent,
    ContainersComponent,
    CtaViewComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
