import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BediktComponent } from './bedikt.component';

describe('BediktComponent', () => {
  let component: BediktComponent;
  let fixture: ComponentFixture<BediktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BediktComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BediktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
