import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaViewComponent } from './cta-view.component';

describe('CtaViewComponent', () => {
  let component: CtaViewComponent;
  let fixture: ComponentFixture<CtaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
