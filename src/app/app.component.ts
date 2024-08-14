import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CompanyCarouselComponent,
  HeaderComponent,
} from '@landing-hrec/components';
import { ReviewsComponent } from 'src/components/src/lib/reviews/reviews.component';
import { VideoFrameComponent } from 'src/components/src/lib/video-frame/video-frame.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    CompanyCarouselComponent,
    VideoFrameComponent,
    ReviewsComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private cdr = inject(ChangeDetectorRef);
}
