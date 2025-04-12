import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktalasComponent } from './diktalas.component';

describe('DiktalasComponent', () => {
  let component: DiktalasComponent;
  let fixture: ComponentFixture<DiktalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiktalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiktalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
