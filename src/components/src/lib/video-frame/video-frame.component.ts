import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'lib-video-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-frame.component.html',
  styleUrl: './video-frame.component.scss',
})
export class VideoFrameComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    setTimeout(() => {
      this.elementRef.nativeElement.querySelector(
        '.i-frame-call'
      ).style.display = 'flex';

      this.cdr.detectChanges();
    }, 6000);
  }
}
