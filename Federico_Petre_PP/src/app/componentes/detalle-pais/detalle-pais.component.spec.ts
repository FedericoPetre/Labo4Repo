import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisComponent } from './detalle-pais.component';

describe('DetallePaisComponent', () => {
  let component: DetallePaisComponent;
  let fixture: ComponentFixture<DetallePaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePaisComponent]
    });
    fixture = TestBed.createComponent(DetallePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
