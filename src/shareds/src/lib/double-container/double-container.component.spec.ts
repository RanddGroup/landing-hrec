import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoubleContainerComponent } from './double-container.component';

describe('DoubleContainerComponent', () => {
  let component: DoubleContainerComponent;
  let fixture: ComponentFixture<DoubleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoubleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
