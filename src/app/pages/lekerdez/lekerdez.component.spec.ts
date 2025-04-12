import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekerdezComponent } from './lekerdez.component';

describe('LekerdezComponent', () => {
  let component: LekerdezComponent;
  let fixture: ComponentFixture<LekerdezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LekerdezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LekerdezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
